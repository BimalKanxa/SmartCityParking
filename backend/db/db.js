import mongoose from "mongoose";

mongoose.set('strictQuery', false)

const  connection = async(URL) =>{
    try {
        await mongoose.connect(URL, {useNewUrlParser:true})
        console.log("connected....................")
    } catch (e) {
        console.log("error" + e)
    }
}

export default connection