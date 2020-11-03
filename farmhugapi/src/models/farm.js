import mongoose from 'mongoose';

const Schema = mongoose.Schema
const dataSchema = new Schema({
    name : {type: String},
    place : {type: String},
    imageURL : {type: String},
    type_of_farm : {type: String},
    capacity : {type: Number},
    cow : {type: Number},
})

const data = mongoose.model('Fram', dataSchema, 'fram')

export default data;