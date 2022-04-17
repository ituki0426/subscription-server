import * as mongoDB from "mongodb";
import { resolve } from "path";
import { Student } from "../generated/resolvers";
export const collections:{
	students?:mongoDB.Collection<Student>
}={

}
const MONGODB_URI = 'mongodb://localhost:27017/test_db'

const connect = async () => {
	const client: mongoDB.MongoClient = await mongoDB.MongoClient
		.connect(MONGODB_URI)	
	const db = client.db("users")
	const studentCollection:mongoDB.Collection<Student>=db.collection("student");
	collections.students=studentCollection;
}
export default connect