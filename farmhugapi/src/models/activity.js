import mongoose from 'mongoose';
import DateTime from './datetime.js'

const Schema = mongoose.Schema
const dataSchema = new Schema({
    name : {type: String},
    detail : {type: String},
    time : {type: Date},
    about : {type: String},
    farmer : {type: Number},
})

const data = mongoose.model('Activity', dataSchema, 'activity')

export default data;