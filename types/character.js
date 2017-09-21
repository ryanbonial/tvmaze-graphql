const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Character',
  description: 'Television show',
  fields: () => ({
    id: { type: GraphQLID },
    url: { type: GraphQLString },
    name: { type: GraphQLString },
    image: { type: GraphQLString }
  })
});