import mongoose from "mongoose";

const parkingLocationSchema = mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    pincode:{
        type: String,
        required: true
    },
    car_no_slot:{
        type: Number,
        required: true
    },
    bike_no_slot: {
      type: Number,
      required: true  
    }
});


const parkingLocation =mongoose.model("parkingLocation", parkingLocationSchema);


export default parkingLocation;