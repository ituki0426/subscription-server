import { firebaseConfig } from "../../firebase/fire"
import { initializeApp } from "firebase-admin"
import { MutationResolvers, NewUser } from "../../generated/resolvers"
import { NewStudent } from "../../generated/resolvers"
import { collections } from "../../db/db"
import * as upp from 'graphql-upload'
import { File } from "../../generated/resolvers"
import 'firebase/auth'
import { getAuth } from "firebase-admin/auth"
import { User } from "../../generated/resolvers"
import { async } from "@firebase/util"
import { Auth } from "../../firebase/fire"
export const signUpedUser:MutationResolvers[`signUpedUser`]=async(
	parent, args, context, info
)=>{
	const decodeToken=await Auth.verifyIdToken(context.token)
	const uid=decodeToken.uid
	const email=decodeToken.email
	const name=args.newUser.name
	const newUser:User={
		email:email,
		name:name,
		id:uid
	}
	collections.users?.insertOne(newUser)
	return newUser
}
export const sourceUpload:MutationResolvers['sourceUpload']=(
	parent, args, context, info
)=>{
	collections.sources?.insertOne(args.source)
	return args.source
}