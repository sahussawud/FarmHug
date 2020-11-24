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


export const UPDATE_A_PROFILE = gql`
      mutation updateProfile($_id: ID!, $firstname: String! , $lastname: String!, $line_account: String!, $username: String!, $email: String!, $password: String!, $imageURL: String!, $type: String!, $role: String!, $farm_id: ID!, $isProfile : Boolean!){
        updateUser(_id:$_id,input:{
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
          isProfile: $isProfile
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
