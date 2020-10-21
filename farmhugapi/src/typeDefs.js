import pkg from 'apollo-server';
const { gql } = pkg;

export default gql`
type User {
  id: Int!
  email: String!
  name: String!
}

type Query {
  user: [User]
}
`;