import mongoose from "mongoose";
const TuitSchema = new mongoose.Schema({
    content: {type: String, required: true},
    password: {type: String, required: true},
    dateOfTuit: Date,
    tuitLikes: Number
}, {collection: 'tuits'});
export default TuitSchema;