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
      isProfile: false
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
      isProfile
    }
  }
`;


export const UPDATE_A_PROFILE = gql`
      mutation updateProfile($_id: ID!, $firstname: String! , $lastname: String!, $line_account: String!, $username: String!, $email: String!, $password: String!, $imageURL: String!, $type: String!, $role: RoleInput!, $farm_id: ID!, $isProfile : Boolean!){
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
        isProfile
      }
    }
      `;

export const DELETE_A_USER = gql`
      mutation deleteProfile($_id: ID!){
        deleteUser(_id: $_id){
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
          isProfile
        }
      }
`;

export const ADD_NEW_FARM = gql`
  mutation addNewFarm($name: String!,  $address: String!, $description: String!, $distance: Float!, $imageURL: String!, $area: String!, $type: String!, $location: String!, $capacity: Int!, $cow: Int!, $createdAt: String!, $watercheck: Int!, $foodConsume: Int!, $employee: Int!) {
    createFarm(input:{
      name: $name
      address: $address
      description: $description
      distance: $distance
      imageURL: $imageURL
      area: $area
      type: $type
      location: $location
      capacity: $capacity
      cow: $cow
      createdAt: $createdAt
      watercheck: $watercheck
      foodConsume: $foodConsume
      employee: $employee
    }){
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
`;

export const UPDATE_FARM = gql`
mutation updateFarm($_id: ID!, $name: String!,  $address: String!, $description: String!, $distance: Float!, $imageURL: String!, $area: String!, $type: String!, $location: String!, $capacity: Int!, $cow: Int!, $createdAt: String!, $watercheck: Int!, $foodConsume: Int!, $employee: Int!) {
  updateFarm(_id: $_id, input:{
    name: $name
    address: $address
    description: $description
    distance: $distance
    imageURL: $imageURL
    area: $area
    type: $type
    location: $location
    capacity: $capacity
    cow: $cow
    createdAt: $createdAt
    watercheck: $watercheck
    foodConsume: $foodConsume
    employee: $employee
  }){
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
`;

export const DELETE_A_FARM = gql`
      mutation deleteFarm($_id: ID!){
        deleteFarm(_id: $_id){
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
`;

export const ADD_NEW_COWPROPERTY = gql`
  mutation addNewCowproperty($name: String!,  $type: String!, $gene: String!, $weight: Float!, $height: Float!, $farm_id: ID!, $stall_id: ID!, $breed: String!, $dob: String!, $sex: String!, $imageUrl: String!) {
    createCowproperty(input:{
      name :$name
      type :$type
      gene :$gene
      weight :$weight
      height :$height
      farm_id :$farm_id
      stall_id :$stall_id
      breed :$breed
      dob :$dob
      sex :$sex
      imageUrl :$imageUrl
    }){
      _id
      name
      type
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
`;

export const UPDATE_COWPROPERTY = gql`
  mutation updateCowproperty($_id: ID!, $name: String!,  $type: String!, $gene: String!, $weight: Float!, $height: Float!, $farm_id: ID!, $stall_id: ID!, $breed: String!, $dob: String!, $sex: String!, $imageUrl: String!) {
    updateCowproperty(_id: $_id, input:{
      name :$name
      type :$type
      gene :$gene
      weight :$weight
      height :$height
      farm_id :$farm_id
      stall_id :$stall_id
      breed :$breed
      dob :$dob
      sex :$sex
      imageUrl :$imageUrl
    }){
      _id
      name
      type
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
`;

export const DELETE_A_COWPROPERTY = gql`
      mutation deleteCowproperty($_id: ID!){
        deleteCowproperty(_id: $_id){
          _id
          name
          type
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
`;

export const ADD_NEW_ACTIVITY = gql`
  mutation addNewActivity($name: String!,  $farm_id: ID!, $animal_id: ID!, $stall_id: ID!, $type: String!, $detail: String!, $alertDate: String!, $updatedAt: String!, $status: String!, $creater_id: ID!) {
    createActivity(input:{
      name :$name
      farm_id :$farm_id
      animal_id :$animal_id
      stall_id :$stall_id
      type :$type
      detail  :$detail
      alertDate :$alertDate
      updatedAt  :$updatedAt
      status  :$status
      creater_id  :$creater_id
    }){
      _id
      name
      farm_id
      animal_id
      stall_id
      type
      detail
      alertDate
      updatedAt
      status
      creater_id
    }
  }
`;

export const UPDATE_ACTIVITY = gql`
  mutation updateActivity($_id:ID!, $name: String!,  $farm_id: ID!, $animal_id: ID!, $stall_id: ID!, $type: String!, $detail: String!, $alertDate: String!, $updatedAt: String!, $status: String!, $creater_id: ID!) {
    updateActivity(_id:$_id, input:{
      name :$name
      farm_id :$farm_id
      animal_id :$animal_id
      stall_id :$stall_id
      type :$type
      detail  :$detail
      alertDate :$alertDate
      updatedAt  :$updatedAt
      status  :$status
      creater_id  :$creater_id
    }){
      _id
      name
      farm_id
      animal_id
      stall_id
      type
      detail
      alertDate
      updatedAt
      status
      creater_id
    }
  }
`;

export const DELETE_ACTIVITY = gql`
      mutation deleteActivity($_id: ID!){
        deleteActivity(_id: $_id){
          _id
          name
          farm_id
          animal_id
          stall_id
          type
          detail
          alertDate
          updatedAt
          status
          creater_id
        }
      }
`;

export const ADD_NEW_STALL = gql`
  mutation addNewStall($name: String!,  $currentAnimal: Int!, $maximumAnimal: Int!, $farm_id: ID!, $food: Int!, $water: Int!, $manure: Int!, $updatedAt: String!, $area: String!) {
    createStall(input:{
      name :$name
      currentAnimal  :$currentAnimal
      maximumAnimal :$maximumAnimal
      farm_id :$farm_id
      food   :$food
      water   :$water
      manure   :$manure
      updatedAt   :$updatedAt
      area :$area
    }){
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
`;

export const UPDATE_STALL = gql`
  mutation updateStall($_id:ID!, $name: String!,  $currentAnimal: Int!, $maximumAnimal: Int!, $farm_id: ID!, $food: Int!, $water: Int!, $manure: Int!, $updatedAt: String!, $area: String!) {
    updateStall(_id:$_id, input:{
      name :$name
      currentAnimal  :$currentAnimal
      maximumAnimal :$maximumAnimal
      farm_id :$farm_id
      food   :$food
      water   :$water
      manure   :$manure
      updatedAt   :$updatedAt
      area :$area
    }){
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
`;

export const DELETE_STALL = gql`
      mutation deleteStall($_id: ID!){
        deleteStall(_id: $_id){
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
`;