import { ApolloServer, gql } from 'apollo-server'
import connect from '../db/db'
import express from 'express'
import { collections } from '../db/db'
import { kill } from 'process'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchemaSync } from '@graphql-tools/load';
import { join } from 'path';
import * as mongoDB from "mongodb";
import { Student } from '../generated/resolvers'
import { NewStudent } from '../generated/resolvers'
import { MutationResolvers } from '../generated/resolvers'
import resolvers from '../gql/resolvers'
const typeDefs = loadSchemaSync(join(__dirname, '../gql/schema/schema.gql'), {
    loaders: [new GraphQLFileLoader()],
});
const server = new ApolloServer({ typeDefs, resolvers });

connect()
	.then(() => {
		server.listen()
			.then(({ url }) => {
				console.log(`🚀  Server ready at ${url}`);
			})
			.catch((error) => {
				console.log(error)
			})
	})
	.catch((error) => {
		console.log(error)
})
