import { Resolvers } from '../generated/resolvers';
import * as mutation from './mutation/index'
import * as query from './query/index'
const resolvers:Resolvers={
	Query:query,
	Mutation:mutation
}
export default resolvers