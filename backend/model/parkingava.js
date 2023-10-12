import mongoose from "mongoose";


const parkingAvaSchema = mongoose.Schema({
    location:{
        type: String,
        required: true,
    },
    location_id:{
        type: String,
        required: true
    },
    slot_id:{
        type: String,
        required: true,
    },
    ava: {
        type: Boolean,
        required: true
    }
})