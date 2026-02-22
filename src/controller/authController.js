import userModel from "../models/User.js";
import bcrypt from 'bcrypt';
import { token } from "../utils/ganrateToken.js";

export const registrationController = async ( req, res)=>{

    let {fullName, email, phone, password, role} = req.body;

    if(!fullName || !email || !phone || !password || !role){
        return res.status(404).json({massage : "All Field Required..."})
    };

    try {
        
        let existUser = await userModel.findOne({email:email})

        if(existUser){
            return res.status(404).json({massage : 'emailID AllReady Exist please Enter Other emailID...'})
        }

        let newUser = await userModel.create({
            fullName,
            email,
            phone,
            password,
            role
        })

        return res.status(201).json({
            massage: "New user Create Successfully...",
            result : newUser
        })

    } catch (error) {
        return res.status(500).json({massage : `${error}, Server Error....`})
    }
}

export const loginController = async (req, res)=>{

    let {email, password} = req.body;

    if(!email || !password){
        return res.status(404).json({massage : "All Field Required..."})
    }

    try {
        
        let existUser = await userModel.findOne({email:email})
        if(!existUser){
            return res.status(404).json({massage : "Invailid Email ID... please Try Again..."})
        }

        let isMatch = await bcrypt.compare(password, existUser.password);

        if(!isMatch){
            return res.status(404).json({massage : "Password Invailid Please Enter Correct Password..."})
        }

        return res.status(201).json({
            massage: "LogIN Successfully...",
            result: {
                fullName : existUser.fullName,
                token: token(existUser.email, existUser._id),
                email: existUser.email,
                phone: existUser.phone,
                role: existUser.role,
            }
        })


    } catch (error) {
        return res.status(500).json({massage : `${error}, Sever Error...`})
    }
}