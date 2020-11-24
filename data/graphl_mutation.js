import Farm from "../models/farms";
import User from "../models/user";
import Animal from "../models/animal";
import Stall from "../models/stall";
import Activity from "../models/activity";
import post from "../models/post";
import comment from "../models/comments";

import gql from 'graphql-tag'
// import { ApolloClient } from 'apollo-client'
// import { setContext } from 'apollo-link-context';
// import { HttpLink } from 'apollo-link-http'

// const client = new ApolloClient({
//   link: authLink.concat(new HttpLink({ uri: 'https://cors-anywhere.herokuapp.com/https://farm-hug-api.herokuapp.com/graphql' })),
//   cache: new InMemoryCache()
// })

export const ADD_NEW_USER = gql`
  mutation AddTodo($username: String!,  $password: String!) {
    createUser(input:{
      firstname: ""
      lastname: ""
      line_account : ""
      username: $username
      email: ""
      password: $password
      imageURL: ""
      type: ""
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
`;


export const UPDATE_PROFILE = gql`
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
      `
