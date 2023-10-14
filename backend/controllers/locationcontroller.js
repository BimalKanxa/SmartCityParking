import parkingLocation from "../model/parkinglocation.js";
// import Parkingslot from "../model/parkingslots.js";


export const registreLocation = async (req, res) => {
  try {
    const data = await parkingLocation.findOne({ name: req.body.name });
    if (data != null)
      return res
        .status(201)
        .json({
          success: false,
          flag: "duplicate location name",
          msg: "try with another name",
        });
    const locationDetails = {
      address: req.body.address,
      name: req.body.name,
      pincode: req.body.pincode,
      car_no_slot: req.body.car_no_slot,
      bike_no_slot: req.body.bike_no_slot,
    };

    const newLocation = parkingLocation(locationDetails);
    await newLocation.save();
    return res
      .status(200)
      .json({ success: true, msg: "registration successfull" });
  } catch (e) {
    res.status(500).json({ msg: "internal servre error" });
  }
};




export const getLocation = async(req, res) =>{
  try {
    const locations = await parkingLocation.find()
    return res.status(200).json(locations)
  } catch (e) {
    return res.status(500).json("internal server error")
  }
}



// export const getslotes = async(req, res) => {
//   try{
//     const slots = await Parkingslot.find()
//   }
//   catch(e){
//     return res.status(500).json("internal server error");
//   }

// }
