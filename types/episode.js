const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Episode',
  description: 'Television show episode',
  fields: () => ({
    id: { type: GraphQLID },
    url: { type: GraphQLString },
    name: { type: GraphQLString },
    season: { type: GraphQLInt },
    number: { type: GraphQLInt },
    airdate: { type: GraphQLString },
    airtime: { type: GraphQLString },
    airstamp: { type: GraphQLString },
    runtime: { type: GraphQLInt },
    image: {
      type: GraphQLString,
      resolve: episode => episode.image.medium
    },
    summary: { type: GraphQLString }
  })
});