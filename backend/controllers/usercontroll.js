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
      post: req.body.post,
    };

    const newUser = User(user);
    await newUser.save();
    return res.status(200).json({ success: true,msg: "registration successfull" });
  } catch (e) {
    return res.status(500).json({  });
  }
};

export const login = async (req, res) => {
  const data = await User.findOne({email: req.body.email});
  if(data == null)
    return res.status(401).json({success: false, flag:"no_account", msg:"Don't have an account"})
  try {
      const passIsMatch = await bcrypt.compare(req.body.password, data.password)
      if(passIsMatch){
        const accessToken  = jwt.sign(data.toJSON(), process.env.ACCESS_SECRET_KEY, {expiresIn: '15m'});
        const refreshToken = jwt.sign(data.toJSON(), process.env.REFRESH_SECRET_KEY);

        const newToken = new Token({token : refreshToken})
        await newToken.save();

        return res.status(200).json({success: true, msg: "login succesfull...", accessToken : accessToken, refreshToken: refreshToken, fname: data.fname, lname: data.lname, email: data.email, post:data.post});
      }
      else
        return res.status(401).json({success: false, flag:"invalid_credentials", msg: "invalid credentials"})
    } catch (e) {
        return res.status(500).json({success: false, msg: "Internal server error" });
    }
}

//working on it
export const userProfile = async (req, res) => {
  try {
    const user = req.body.email;
    // console.log(user)
    // const UsersData = await User.findOne({}, {_id:0, fname:1, phone:1, email:1})
    const UsersData = await User.findOne({}, {id: user.req.email})

    return res.status(200).json(UsersData)
  } catch (e) {
    return res.status(500).json({error: e})
  }
  
}

//copied from chatgpt
// export const userProfile = async (req, res) => {
//   try {
//     const userId = req.body._id;
//     const userData = await User.findOne({ _id: userId }, { _id: 0, fname: 1, phone: 1, email: 1 });
//     return res.status(200).json(userData);
//   } catch (e) {
//     return res.status(500).json({ error: e });
//   }
// }



// user profile
// export const userProfile = async (req, res) => {

//     const user = await User.findById(req.body.id).select('-password');

//     res.status(200).json({
//         success: true,
//         user
//     })
// }

// log out

 

export const logout = async (req, res) => {
  const refreshToken = req.body.refreshToken; 

  // Check if the provided refreshToken exists in the database
  const token = await Token.findOne({ token: refreshToken });

  if (!token) {
    return res.status(401).json({ success: false, msg: 'Invalid refresh token' });
  }

  // If the refreshToken is found, remove it from the database to invalidate it
  await token.remove();

  return res.status(200).json({ success: true, msg: 'Logout successful' });
};

//for admin access
// const sendTokenResponse = async (user, codeStatus, res) => {
//   const token = await user.getJwtToken();
//   res
//       .status(codeStatus)
//       .cookie('token', token, { maxAge: 60 * 60 * 1000, httpOnly: true })
//       .json({
//           success: true,
//           role: user.post
//       })
// }
