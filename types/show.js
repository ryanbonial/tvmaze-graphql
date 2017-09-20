const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Show',
  description: 'Television show',
  fields: () => ({
    id: { type: GraphQLID },
    url: { type: GraphQLString },
    name: { type: GraphQLString },
    type: { type: GraphQLString },
    language: { type: GraphQLString },
    genres: { type: new GraphQLList(GraphQLString) },
    status: { type: GraphQLString },
    runtime: { type: GraphQLInt },
    premiered: { type: GraphQLString },
    officialSite: { type: GraphQLString },
    weight: { type: GraphQLString },
    summary: { type: GraphQLString },
    updated: { type: GraphQLInt }
  })
});