import pkg from 'apollo-server';
const { ApolloServer, gql } = pkg;
import mongoose from 'mongoose'

import typeDefs from './typeDefs.js';
import resolvers from './resolvers.js';

const uri = "mongodb+srv://admin:admin@cluster0.ze1ps.gcp.mongodb.net/FarmhugDB?retryWrites=true&w=majority";

mongoose.Promise = global.Promise;
mongoose.connect(uri, {useNewUrlParser: true});

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




server.listen(4000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
