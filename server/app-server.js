const { GraphQLServer } = require ('graphql-yoga');
const { Prisma } = require ('prisma-binding');

const Query = require('./src/resolvers/Query')
const Mutation = require('./src/resolvers/Mutation')
const AuthPayload = require('./src/resolvers/AuthPayload')

const resolvers = {
    Query,
    Mutation,
    AuthPayload
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: req => ({
        ...req,
        db: new Prisma({
            typeDefs:'src/generated/prisma.graphql',
            endpoint: 'http://localhost:4466',
            //secret: 'mysecret123',
            debug: true,
        })
    })
})

server.start(4000, () => {
    console.log('--- Now Listening for requests on port:4000 ---')
   });