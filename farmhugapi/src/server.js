import express from 'express';
import pkg from 'apollo-server-express';
const { ApolloServer, gql } = pkg;

// import typeDefs from './typeDefs'
// import resolvers from './resolvers'

// const typeDefs = gql`
// type Query {
//   my_query:[counters]
//   hello: String
// }

// type counters{
// _id:String,
// seq:String
// }`

// const resolvers = {
//   Query: {
//     hello: () => {
//       return `hey sup ? `;
//     },
//     my_query: async () => {
//       values = await db.collection('counters').find().toArray().then(res => { return res });
//       return values
//     }
//   }
// };

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log('Now browse to http://localhost:4000' + server.graphqlPath)
);