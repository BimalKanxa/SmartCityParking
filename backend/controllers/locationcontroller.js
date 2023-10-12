import ParkingLocation from "../model/parkinglocation.js";

export const registreLocation = async (req, res) => {
  try {
    const data = await ParkingLocation.findOne({ name: req.body.name });
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

    const newLocation = ParkingLocation(locationDetails);
    await newLocation.save();
    return res
      .status(200)
      .json({ success: true, msg: "registration successfull" });
  } catch (e) {
    res.status(500).json({ msg: "internal servre error" });
  }
};
