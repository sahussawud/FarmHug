
import gql from 'graphql-tag'

export const getUserData =  gql`
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
 
export const farmdata =  gql`
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

export const cowpropertydata =  gql`
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


export const activitydata =  gql`
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

export const stalldata =  gql`
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