import mongoose from "mongoose";

const vehicleSchema = mongoose.Schema({
    owner_name:{
        type: String, 
        required: true
    },
    vehicle_no: {
        type: String,
        required: true
    },
    vehicle_type:{
        type: String,
        required: true,
    },
    time_duration: {
        type: Number,
        required: true
    }
});

const vehicle = mongoose.model('vehicle', vehicleSchema);
export default vehicle;