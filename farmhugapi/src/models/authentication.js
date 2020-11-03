import mongoose from 'mongoose';

const Schema = mongoose.Schema
const dataSchema = new Schema({
    access_token : {type: String},
    refresh_token : {type: String},
})

const data = mongoose.model('Authentication', dataSchema, 'authentication')

// data.create({access_token: fmeoi154gwhiovjpf485evg4bew, refresh_token: sfew48bvdwsbbdww4vwavd6vq4v8v}, function(err, doc){
//     if (err) return handleError(err);
// })

export default data;