import Vehicle from "../model/vehicle.js";


export const registervehicle = async(req, res) => {
    try{
        const data = await Vehicle.findOne({vehicle_no: req.body.vehicle_no});

        if(data!=null)
            return res.status(201).json({msg: "already booked"});

        const vehicleDetails = {
            owner_name: req.body.owner_name,
            vehicle_no: req.body.vehicle_no,
            vehicle_type: req.body.type,
            time_duration: req.body.timeDuration,
        }

        const newVehicle = Vehicle(vehicleDetails);
        await newVehicle.save();
        return res.status(200).json({ success: true,msg: "registration successfull" });
    }
    catch(e){
        res.status(500).json({msg: "internal servre error"});
    }
}