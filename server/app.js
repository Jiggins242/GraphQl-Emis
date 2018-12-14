const { GraphQLServer } = require ('graphql-yoga');
const { Prisma } = require ('prisma-binding');

// dummy data //
let patients = [{
    id: 'id-0',
    title: 'Mr',
    forname: 'Homer',
    surname: 'Simpson',
    age: '39',
    nhsnum: '12345',
}]
let idCount = patients.length
const resolvers = {
    Query: {
        info: () => 'text',
        patientInfo: () => patients
    },

    Mutation: {
        post: (parent, args) => {
            const patient ={
                id: `id-${idCount++}`,
                title: args.title,
                forname: args.forname,
                surname: args.surname,
                age: args.age,
                nhsnum: args.nhsnum
            }
            patients.push(patient)
            return patient
        }
    },

    Patient: {
        id: (parent) => parent.id,
        title: (parent) => parent.title,
        forname: (parent) => parent.forname,
        surname: (parent) => parent.surname,
        age: (parent) => parent.age,
        nhsnum: (parent) => parent.nhsnum
    }
}

const server = new GraphQLServer({
    typeDefs: './schema/schema.graphql',
    resolvers
})

server.start(4000, () => {
    console.log('--- Now Listening for requests on port:4000 ---')
   });