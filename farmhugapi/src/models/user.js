
// import pkg from 'mongodb';
// const { MongoClient } = pkg;
// import mongoose from 'mongoose';
// import pkg from 'apollo-server';
// const { ApolloServer, gql } = pkg;
import mongoose from 'mongoose';
// var collection;
// const url = "mongodb+srv://admin:admin@cluster0.ze1ps.gcp.mongodb.net/test?retryWrites=true&w=majority";

const Schema = mongoose.Schema
const dataSchema = new Schema({
  firstname: {type: String},
  lastname: {type: String},
  line_account: {type: String},
  username: {type: String},
  email: {type: String},
  password: {type: String},
  imageURL: {type: String},
  role_of_farm: {type: String},
  role_of_user: {type: String},
})

const data = mongoose.model('User', dataSchema, 'user')
// created

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("test");
//   dbo.createCollection("testcollection2", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });

// insert

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("test");
//   var myobj = { name: "Company Inc", address: "Highway 37" };
//   dbo.collection("testcollection").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("test");
//   dbo.collection("testcollection").findOne({}, function(err, result) {
//     if (err) throw err;
//     console.log(result.name);
//     db.close();
//   });
// });

// collection = MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("test");
//   var query = { address: "Highway 37" };
//   dbo.collection("testcollection").find(query).toArray(function(err, result) {
//     if (err) throw err;
//     db.close();
//     return result
//   });
//   console.log("collection : " + collection);
// });

// var query = { address: "Highway 37" };
// const client = new MongoClient(url, { useNewUrlParser: true });
// client.connect(err => {
//   collection = client.db("test").collection("testcollection").find(query);
//   console.log(collection);
//   // perform actions on the collection object
//   client.close();
// });

// export default collection;
export default data;