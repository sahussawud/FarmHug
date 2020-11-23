import Farm from "../models/farms";
import User from "../models/user";
import Animal from "../models/animal";
import Stall from "../models/stall";
import Activity from "../models/activity";
import post from "../models/post";
import comment from "../models/comments";

import gql from 'graphql-tag'
import { ApolloClient } from 'apollo-client'
import { setContext } from 'apollo-link-context';
import { HttpLink } from 'apollo-link-http'

const client = new ApolloClient({
  link: authLink.concat(new HttpLink({ uri: 'https://cors-anywhere.herokuapp.com/https://farm-hug-api.herokuapp.com/graphql' })),
  cache: new InMemoryCache()
})

// create
client.mutate({
    mutation: gql`
    mutation{
      createUser(input:{
        firstname: "phophon02"
        lastname: "Insee"
        line_account: ""
        username: "Lnwlil007"
        email: "Lnwlil@email.com"
        password: "000000"
        imageURL: ""
        type: "cow-maneger"
        role: Employee
        farm_id: ""
      }){
        _id
        firstname
        lastname
        line_account
        username
        email
        password
        imageURL
        type
        role
    		farm_id
      }
    }
    `,}).then(data => console.log(data)).catch(error => console.error(error));

    // update
    client.mutate({
      mutation: gql`
      mutation{
        updateUser(_id:"5fba81465144000017a23fee",input:{
          firstname: "phophon02"
          lastname: "Insee"
          line_account: ""
          username: "Lnwlil007"
          email: "Lnwlil@email.com"
          password: "000000"
          imageURL: ""
          type: "cow-maneger"
          role: Employee
          farm_id: ""
      }){
        _id
        firstname
        lastname
        line_account
        username
        email
        password
        imageURL
        type
        role
    		farm_id
      }
    }
      `,}).then(data => console.log(data)).catch(error => console.error(error));

      // delete
client.mutate({
        mutation: gql`
        mutation{
          deleteUser(_id:"5fba81465144000017a23fee"){
            _id
            firstname
            lastname
            line_account
            username
            email
            password
            imageURL
            type
            role
            farm_id
        }
      }
        `,}).then(data => console.log(data)).catch(error => console.error(error));

// qury
// const data = await client.mutate({
//   variables:{id : _id},
//   mutation: gql`
//   mutation AddComment($id: ID!){
//       user(_id:$id){
//         _id
//         firstname
//         lastname
//         line_account
//         username
//         email
//         password
//         imageURL
//         type
//         role
//         farm_id
//       }
//     }
//     `
// })
// console.log(data)
// export const USER = new User(data.data.user._id, data.data.user.username, data.data.user.email)

// client.qurry({
//   qurry: gql`
//   qurry{
//     _id
//     firstname
//     lastname
//     line_account
//     username
//     email
//     password
//     imageURL
//     role_of_farm
//     role_of_user
//   }
//   `
// }).then(data => console.log(data)).catch(error => console.error(error));

const client = new ApolloClient({
  link: authLink.concat(new HttpLink({ uri: 'https://cors-anywhere.herokuapp.com/https://farm-hug-api.herokuapp.com/graphql' })),
  cache: new InMemoryCache()
})

const userdata = await client.mutate({
  variables:{id : _id},
  mutation: gql`
  mutation AddComment($id: ID!){
      user(_id:$id){
        _id
        firstname
        lastname
        line_account
        username
        email
        password
        imageURL
        type
        role
        farm_id
      }
    }
    `
})
console.log(userdata)
export const USER = new User(data.data.user._id, data.data.user.username, data.data.user.email)

const farmdata = await client.mutate({
  variables:{id : _id},
  mutation: gql`
  mutation AddComment($id: ID!){
    farm(_id:$id){
      _id
      name
      address
      description
      distance
      imageURL
      area
      type
      location
      capacity
      cow
      createdAt
      watercheck
      foodConsume
      employee
      }
    }
    `
})
console.log(farmdata)

const cowpropertydata = await client.mutate({
  variables:{id : _id},
  mutation: gql`
  mutation AddComment($id: ID!){
    farm(_id:$id){
      _id
      name
      type
      stall
      gene
      weight
      height
      farm_id
      stall_id
      breed
      dob
      sex
      imageUrl
      }
    }
    `
})
console.log(cowpropertydata)

