import express from "express"
import { login, register, students } from "../controllers/usercontroll.js";

import {registervehicle} from "../controllers/vehiclecontroll.js"
import {registreLocation} from "../controllers/locationcontroller.js"

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.post('/registervehicle', registervehicle)
router.post('/registerlocation', registreLocation)  //for admin




export default router;