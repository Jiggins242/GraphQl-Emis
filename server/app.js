const { GraphQLServer } = require ('graphql-yoga');
const { Prisma } = require ('prisma-binding');

const resolvers = {
    Query: {
        info: () => 'Testing Testing 1 2 3 ',
        patientInfo: (parent, args, context, info) => {
            return context.db.query.patients({}, info)
        } 
    },

    Mutation: {
        post: (parent, args, context, info) => {
            return context.db.mutation.createPatient({
                data: {
                    title: args.title,
                    forname: args.forname,
                    surname: args.surname,
                    age: args.age,
                    nhsnum: args.nhsnum,
                },
            }, info)
        },
    },
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