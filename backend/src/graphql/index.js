const { ApolloServer } = require('apollo-server-express');
const { mergeResolvers, mergeTypeDefs } = require('@graphql-tools/merge');
const{ loadFilesSync } = require('@graphql-tools/load-files');

const typeDefs = require = mergeTypeDefs(loadFilesSync(`${__dirname}/schemas`));
const resolvers = require = mergeResolvers(loadFilesSync(`${__dirname}/resolvers`));

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        return { user: req.user };
    }
});

module.exports = apolloServer;
