import mongoose from "mongoose";

const paymentStatusSchema =mongoose.Schema({
    user_id:{
        type: String,
        required: true,
    },
    vehicle_no: {
        type: String,
        required: true,
    },
    payment_success: {
        type: Boolean,
        required: true,
    },
})

const paymentStatus = mongoose.model('paymentStatus', paymentStatusSchema);
export default paymentStatus;