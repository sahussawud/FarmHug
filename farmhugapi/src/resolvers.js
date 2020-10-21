import data from './models/data.js'

const resolvers = {
  User: {
    id: async () => {
      return await data;
    },
  }
};

export default resolvers;