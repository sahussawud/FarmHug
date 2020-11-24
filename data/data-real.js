import Farm from "../models/farms";
import User from "../models/user";
import Animal from "../models/animal";
import Stall from "../models/stall";
import Activity from "../models/activity";
import post from "../models/post";
import comment from "../models/comments";

import gql from 'graphql-tag'
import { ApolloClient } from 'apollo-client'
// import { setContext } from 'apollo-link-context';
import { HttpLink } from 'apollo-link-http'

const client = new ApolloClient({
  link: authLink.concat(new HttpLink({ uri: 'https://cors-anywhere.herokuapp.com/https://farm-hug-api.herokuapp.com/graphql' })),
  cache: new InMemoryCache()
})


export const ADD_NEW_USER = gql`
  mutation AddTodo($firstname: String! , $lastname: String!, $line_account: String!, $username: String!, $email: String!, $password: String!, $imageURL: String!, $type: String!, $role: String!, $farm_id: ID!) {
    createUser(input:{
      firstname: $firstname
      lastname: $lastname
      line_account: $line_account
      username: $username
      email: $email
      password: $password
      imageURL:  $imageURL
      type: $type
      role: $role
      farm_id: $farm_id
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
`;

// create
export const created = client.mutate({
    variables:{farm_id : _id},
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
const client = new ApolloClient({
  link: authLink.concat(new HttpLink({ uri: 'https://cors-anywhere.herokuapp.com/https://farm-hug-api.herokuapp.com/graphql' })),
  cache: new InMemoryCache()
})

const userdata = await client.query({
  variables:{id : _id},
  query: gql`
  query AddComment($id: ID!){
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

const farmdata = await client.query({
  variables:{id : _id},
  query: gql`
  query AddComment($id: ID!){
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

const cowpropertydata = await client.query({
  variables:{farm_id : _id},
  query: gql`
  query AddComment($farm_id: ID!){
    cowproperty(_id:$farm_id){
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

const activitydata = await client.query({
  variables:{farm_id : _id},
  query: gql`
  query AddComment($farm_id: ID!){
    activity(_id:$farm_id){
      _id
      name
      farm_id
      cage_id
      stall_id
      type
      detail
      alertDate
      updatedAt
      status
      creater_id
      }
    }
    `
})
console.log(activitydata)

const stalldata = await client.query({
  variables:{farm_id : _id},
  query: gql`
  query AddComment($farm_id: ID!){
    stall(_id:$farm_id){
      _id
      name
      currentAnimal
      maximumAnimal
      farm_id
      food
      water
      manure
      updatedAt
      area
      }
    }
    `
})
console.log(stalldata)
