const { GraphQLObjectType, GraphQLString } = require('graphql');
const fetch = require('node-fetch');

const ShowType = require('./show');

module.exports = new GraphQLObjectType({
  name: 'CrewCredit',
  description: 'Credited as a crew member of a show',
  fields: () => ({
    type: { type: GraphQLString },
    showHref: { type: GraphQLString },
    show: {
      type: ShowType,
      resolve: (parent) => fetch(parent.showHref).then(resp => resp.json())
    }
  })
});