import express from "express";

//models
import User from "../model/user.js";
import Token from "../model/token.js";

//packages
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'


dotenv.config();

export const register = async (req, res) => {
  try {
    const data = await User.findOne({ email: req.body.email });
    if (data != null)
      return res.status(409).json({ success: false, flag: "duplicate_email", msg: "try with another Email"});

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = {
      fname: req.body.fname,
      lname: req.body.lname,
      phone: req.body.phone,
      email: req.body.email,
      password: hashedPassword,
    };

    const newUser = User(user);
    await newUser.save();
    return res.status(200).json({ success: true,msg: "registration successfull" });
  } catch (e) {
    return res.status(500).json({  });
  }
};

export const login = async (req, res) => {
  const data = await User.findOne({enrollment: req.body.enrollment});
  if(data == null)
    return res.status(401).json({success: false, flag:"no_account", msg:"Don't have an account"})
  try {
      const passIsMatch = await bcrypt.compare(req.body.password, data.password)
      if(passIsMatch){
        const accessToken  = jwt.sign(data.toJSON(), process.env.ACCESS_SECRET_KEY, {expiresIn: '15m'});
        const refreshToken = jwt.sign(data.toJSON(), process.env.REFRESH_SECRET_KEY);

        const newToken = new Token({token : refreshToken})
        await newToken.save();

        return res.status(200).json({success: true, msg: "login succesfull...", accessToken : accessToken, refreshToken: refreshToken, fname: data.fname, lname: data.lname, enrollment: data.enrollment});
      }
      else
        return res.status(401).json({success: false, flag:"invalid_credentials", msg: "invalid credentials"})
    } catch (e) {
        return res.status(500).json({success: false, msg: "Internal server error" });
    }
}


export const Users = async (req, res) => {
  try {
    const UsersData = await User.find({}, {_id:0, fname:1, lname:1, phone:1, enrollment:1, semester:1})
    return res.status(200). json(UsersData)
  } catch (e) {
    return res.status(500).json({error: e})
  }
  
}