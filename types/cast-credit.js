const { GraphQLObjectType, GraphQLString } = require('graphql');
const fetch = require('node-fetch');

const ShowType = require('./show');
const CharacterType = require('./character');

module.exports = new GraphQLObjectType({
  name: 'CastCredit',
  description: 'Credited as a cast member of a show',
  fields: () => ({
    showHref: { type: GraphQLString },
    show: {
      type: ShowType,
      resolve: (parent) => fetch(parent.showHref).then(resp => resp.json())
    },
    characterHref: { type: GraphQLString },
    character: {
      type: CharacterType,
      resolve: (parent) => fetch(parent.characterHref).then(resp => resp.json())
    }
  })
});