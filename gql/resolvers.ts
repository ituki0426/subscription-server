import { Resolvers } from '../generated/resolvers';
import * as mutation from './mutation/index'
import * as query from './query/index'
import { 
  GraphQLUpload,
  graphqlUploadExpress, 
 } from 'graphql-upload'
const resolvers:Resolvers={
	Upload:GraphQLUpload,
	Query:query,
	Mutation:mutation
}
export default resolvers