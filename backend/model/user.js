import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
   
    post:{
        type: Boolean,
        default: false
    },
    phone:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        // match: [
        //     /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/,
        //     'Please add a valid email'
        // ]
    },
    password: {
        type: String,
        required: true
    },
});




const user = mongoose.model('user', userSchema);

export default user;  