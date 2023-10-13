import mongoose, { mongo } from "mongoose";


const parkingSlotSchema = mongoose.Schema({
    location:{
        type: String,
        required: true,
    },
    slot_no:{
        type: Number,
        required: true,
    },

})


const parkingslot = mongoose.model("parkingslot", parkingSlotSchema);

export default parkingslot;