import authentication from './models/authentication.js'
import user from './models/authentication.js'
import farm from './models/farm.js'
import cowproperty from './models/cowproperty.js'
import activity from './models/activity.js'
import stall from './models/stall.js'

const resolvers = {
  Query: {
    async users() {
      return await user.find();
    },
    async authentications() {
      return await authentication.find();
    },
    async farms() {
      return await farm.find();
    },
    async cowpropertys() {
      return await cowproperty.find();
    },
    async activitys() {
      return await activity.find();
    },
    async stalls() {
      return await stall.find();
    },
  },
  Mutation: {
    async createUser(root, { input }) {
      return await user.create(input);
    },
    async updateUser(root, { _id, input }) {
      return await user.findOneAndUpdate({
        _id
      }, input,{new:true})
    },
    async deleteUser(root, { _id}) {
      return await user.findByIdAndRemove(_id)
    },
    async createAuthentication(root, { input }) {
      return await authentication.create(input);
    },
    async updateAuthentication(root, { _id, input }) {
      return await authentication.findOneAndUpdate({
        _id
      }, input,{new:true})
    },
    async deleteAuthentication(root, { _id}) {
      return await authentication.findByIdAndRemove(_id)
    },
    async createFarm(root, { input }) {
      return await farm.create(input);
    },
    async updateFarm(root, { _id, input }) {
      return await farm.findOneAndUpdate({
        _id
      }, input,{new:true})
    },
    async deleteFarm(root, { _id}) {
      return await farm.findByIdAndRemove(_id)
    },
    async createCowproperty(root, { input }) {
      return await cowproperty.create(input);
    },
    async updateCowproperty(root, { _id, input }) {
      return await cowproperty.findOneAndUpdate({
        _id
      }, input,{new:true})
    },
    async deleteCowproperty(root, { _id}) {
      return await cowproperty.findByIdAndRemove(_id)
    },
    async createActivity(root, { input }) {
      return await activity.create(input);
    },
    async updateActivity(root, { _id, input }) {
      return await activity.findOneAndUpdate({
        _id
      }, input,{new:true})
    },
    async deleteActivity(root, { _id}) {
      return await activity.findByIdAndRemove(_id)
    },
    async createStall(root, { input }) {
      return await stall.create(input);
    },
    async updateStall(root, { _id, input }) {
      return await stall.findOneAndUpdate({
        _id
      }, input,{new:true})
    },
    async deleteStall(root, { _id}) {
      return await stall.findByIdAndRemove(_id)
    },
  },
};

export default resolvers;