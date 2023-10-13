import ParkingLocation from "../model/parkinglocation.js";
import Parkingava from "../model/parkingava.js";
import Parkingslot from "../model/parkingslots.js";



export const parkingAvailability = async(req, res) =>{
    try {
        const data = await ParkingLocation.findOne({name: req.body.name})
<<<<<<< HEAD
            console.log(data)
        const loc = data.address + " " + data.pincode+ " " + " " + data.name
            // console.log(loc)
=======
        const loc = data.address + " " + data.pincode+ " " + " " + data.name

>>>>>>> 4a185fb30e8311a73df3dd723d687cb7518a652e

        const slotID = await Parkingslot.findOne({location: loc})


<<<<<<< HEAD
        // console.log(slotID)
        const availabilityDetails = {
            location: "datalpara",
            location_id: data._id,
            slot_id: slotID,
=======
        const availabilityDetails = {
            location: "datalpara",
            location_id: data._id,
            slot_id: slotID._id,
>>>>>>> 4a185fb30e8311a73df3dd723d687cb7518a652e
            ava: false
        }

        const newparkingAvailability = Parkingava(availabilityDetails);
        await newparkingAvailability.save();

        return res.status(200).json(availabilityDetails)
    } catch (e) {
        res.status(500).json({msg: "internal server error in this"});
    }
}


export const parkingSlot = async (req, res) =>{
    try{
        const check = await Parkingslot.findOne({slot_no: req.body.slot_no})

        if(check!=null)
            return  res.status(209). json({msg: "slot is already present"})


        const data = await ParkingLocation.findOne({name: req.body.name})
        const location = data.address + " " + data.pincode+ " " + " " +data.name;

        const slotDetails = {
            location: location,
            slot_no: req.body.slot_no
        };


        const newSlot = Parkingslot(slotDetails);
        await newSlot.save();
        return res.status(200).json({msg: "created successfully"})
    }
    catch(e){
        return res.status(500).json({msg: "internal server error"});
    }
}