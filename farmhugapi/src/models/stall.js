import mongoose from 'mongoose';
import DateTime from './datetime.js'

const Schema = mongoose.Schema
const dataSchema = new Schema({
    cow : {type: Number},
    food : {type: Boolean},
    water : {type: Boolean},
    manure : {type: Boolean},
    time_update : {type: Date},
})

const data = mongoose.model('Stall', dataSchema, 'stall')

export default data;