import { MutationResolvers } from "../../generated/resolvers"
import { NewStudent } from "../../generated/resolvers"
import { collections } from "../../db/db"
export const addStudent:MutationResolvers['addStudent']=async(
	parent,
    args,
)=>{
	
	const name:string | undefined=args.newStudent?.name
	const school:string | undefined=args.newStudent?.school
	const student:NewStudent={
		name:name,
		school:school
	}
	const res=collections.students?.insertOne(student)
	return student
}