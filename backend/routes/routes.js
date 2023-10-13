import express from "express"
import { login, logout, register, userProfile} from "../controllers/usercontroll.js";

import {registervehicle} from "../controllers/vehiclecontroll.js"
import {registreLocation,getLocation} from "../controllers/locationcontroller.js"


import { parkingAvailability, parkingSlot } from "../controllers/parkingAvailabilityControll.js";

import { makePayment } from "../controllers/paymentcontroller.js";

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)
router.get('/userProfile', userProfile)
router.post('/registervehicle', registervehicle)
router.post('/registerlocation', registreLocation)  //for admin
router.post('/parkingavaiable', parkingAvailability)  //for admin
router.post('/parkingslot', parkingSlot)  //for admin
router.post('/api/create-checkout-session', makePayment)  //for admin
router.get('/getlocations', getLocation)






export default router;