
import pkg from 'mongodb';
const { MongoClient } = pkg;
// import pkg from 'apollo-server';
// const { ApolloServer, gql } = pkg;

let collection;

const url = "mongodb+srv://admin:admin@cluster0.ze1ps.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: false, useUnifiedTopology: false });
client.connect(err => {
  collection = client.db("test").collection("test_table");
  // perform actions on the collection object
  console.log("MONGOdb connected");
  client.close();
  console.log(collection)
});

export default collection;
