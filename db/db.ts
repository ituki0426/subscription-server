import * as mongoDB from "mongodb";
import { resolve } from "path";
import { Student } from "../generated/resolvers";
import { User } from "../generated/resolvers";
import { Source } from "../generated/resolvers";
export const collections:{
	students?:mongoDB.Collection<Student>
	users?:mongoDB.Collection<User>
	sources?:mongoDB.Collection<Source>
}={

}
const MONGODB_URI = 'mongodb://localhost:27017/test_db'

const connect = async () => {
	const client: mongoDB.MongoClient = await mongoDB.MongoClient
		.connect(MONGODB_URI)	
	const db = client.db("users")
	const studentCollection:mongoDB.Collection<Student>=db.collection("student");
	const userCollection:mongoDB.Collection<User>=db.collection("user");
	const sourceCollection:mongoDB.Collection<Source>=db.collection("source");
	collections.students=studentCollection;
	collections.users=userCollection;
	collections.sources=sourceCollection;
}
export default connect