module.exports = {
  client: {
    service: {
      name: 'graphql-app',
      url: 'https://countries.trevorblades.com/graphql',
    },
    includes: ['./src/query.graphql'],
  },
}
