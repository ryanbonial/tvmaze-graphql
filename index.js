const graphqlHTTP = require('express-graphql');
const express = require('express');
const RootSchema = require('./schema');

const app = express();

app.use('*', graphqlHTTP({
  schema: RootSchema,
  pretty: false,
  graphiql: true
}));

app.listen(3000);
console.log('GraphQL listening on port 3000');