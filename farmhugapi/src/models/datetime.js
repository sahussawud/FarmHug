import mongoose from 'mongoose';

const Schema = mongoose.Schema
const dataSchema = new Schema({
    day : {type: String},
    a_date : {type: Number},
    month : {type: String},
    a_month : {type: Number},
    a_year : {type: Number},
    hours : {type: Number},
    minutes : {type: Number},
    seconds : {type: Number},
})

const data = mongoose.model('DateTime', dataSchema)

export default data;