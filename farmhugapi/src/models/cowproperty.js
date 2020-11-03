import mongoose from 'mongoose';
import DateTime from './datetime.js'

const Schema = mongoose.Schema
const dataSchema = new Schema({
    type : {type: String},
    stall : {type: String},
    gene : {type: String},
    birth : {type: Date},
    weight : {type: mongoose.Decimal128},
    height : {type: mongoose.Decimal128},
})

const data = mongoose.model('Cowproperty', dataSchema, 'cowproperty')

export default data;