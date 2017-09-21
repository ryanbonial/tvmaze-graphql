const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList
} = require('graphql');
const fetch = require('node-fetch');

const CastCreditType = require('./cast-credit');
const CrewCreditType = require('./crew-credit');

module.exports = new GraphQLObjectType({
  name: 'People',
  description: 'A member of cast or crew',
  fields: () => ({
    id: { type: GraphQLID },
    url: { type: GraphQLString },
    name: { type: GraphQLString },
    image: {
      type: GraphQLString,
      resolve: person => person.image.medium
    },
    castCredits: {
      type: new GraphQLList(CastCreditType),
      resolve: (parent) => {
        return fetch(`http://api.tvmaze.com/people/${parent.id}/castcredits`)
          .then(resp => resp.json())
          .then(resp => {
            return resp.map(ccr => ({
              showHref: ccr._links.show.href,
              characterHref: ccr._links.character.href
            }));
          });
      }
    },
    crewCredits: {
      type: new GraphQLList(CrewCreditType),
      resolve: (parent) => {
        return fetch(`http://api.tvmaze.com/people/${parent.id}/crewcredits`)
          .then(resp => resp.json())
          .then(resp => {
            return resp.map(ccr => ({
              type: ccr.type,
              showHref: ccr._links.show.href
            }));
          });
      }
    }
  })
});