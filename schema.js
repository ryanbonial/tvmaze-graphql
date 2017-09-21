const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID
} = require('graphql');
const fetch = require('node-fetch');

const ShowType = require('./types/show');
const PeopleType = require('./types/people');

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: 'This is a GraphQL implementation of the tvmaze API',
    fields: () => ({
      show: {
        type: ShowType,
        args: {
          id: { type: new GraphQLNonNull(GraphQLID) }
        },
        resolve: (parent, args) => {
          return fetch(`http://api.tvmaze.com/shows/${args.id}`)
            .then(resp => resp.json());
        }
      },
      person: {
        type: PeopleType,
        args: {
          id: { type: new GraphQLNonNull(GraphQLID) }
        },
        resolve: (parent, args) => {
          return fetch(`http://api.tvmaze.com/people/${args.id}`)
            .then(resp => resp.json());
        }
      }
    })
  })
});