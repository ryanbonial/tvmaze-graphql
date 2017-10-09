const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql');
const fetch = require('node-fetch');

const EpisodeType = require('./episode');

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
    updated: { type: GraphQLInt },
    episodes: {
      type: new GraphQLList(EpisodeType),
      resolve: (parent) => {
        return fetch(`http://api.tvmaze.com/shows/${parent.id}/episodes`)
          .then(resp => resp.json());
      }
    },
  })
});