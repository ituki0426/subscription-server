import { initializeApp } from "firebase-admin"
import { MutationResolvers, NewUser } from "../../generated/resolvers"
import { NewStudent } from "../../generated/resolvers"
import { collections } from "../../db/db"
import * as upp from 'graphql-upload'
import 'firebase/auth'
import { getAuth } from "firebase-admin/auth"
import { User } from "../../generated/resolvers"
import { async } from "@firebase/util"
import { File } from "../../generated/resolvers"

export const sourceUpload:MutationResolvers['sourceUpload']=(
	parent, args, context, info
)=>{
	collections.sources?.insertOne(args.source)
	return "sucess"
}