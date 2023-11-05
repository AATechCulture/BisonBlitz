import _ from 'lodash';

import { PostgresUUIDStore } from './stores/PostgresUUIDStore';
import { PostgresUserStore } from './stores/PostgresUserStore';
import express, { Application } from 'express';
import { getPool, GQLContext, mergeModulesSchemaWith } from './misc';
import { readFileSync } from 'fs';
import { MutationResolver } from './resolvers/MutationResolver';
import { UserLoader } from './loaders/UserLoader';
const { ApolloServer } = require('apollo-server-express');

const PATH = '/graphql';

export const getServer = _.memoize(async () => {
  const pg = getPool();
  const typeDefs = readFileSync('./graphql/schema.graphql', 'utf8');

  // Hey BisonBlitz made a change here ? Please ensure to update the schema
  const schema = mergeModulesSchemaWith({
    typeDefs,
    resolvers: {
      Mutation: MutationResolver,
    },
  });

  const server = new ApolloServer({
    schema,
    context: (): GQLContext => {
      const userPostgresStore: PostgresUserStore = new PostgresUserStore(pg);
      const uuidPostgresStore: PostgresUUIDStore = new PostgresUUIDStore(pg);

      const user = new UserLoader(userPostgresStore, uuidPostgresStore);
      return {
        user,
      };
    },
  });

  await server.start();

  return server;
});

export async function createApolloServer(app: Application) {
  const apolloServer = await getServer();
  apolloServer.applyMiddleware({
    app,
    path: PATH,
  });
}

const app = express();

createApolloServer(app).then(() => {
  const PORT = 2000;
  app.listen(PORT);
  console.log(`🚀  Server ready at /graphQL! (Running with node)`);
});
