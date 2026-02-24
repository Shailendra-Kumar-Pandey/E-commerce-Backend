import userModel from "../models/User.js";
import SellerProfileModel from "../models/SellerProfile.js";


export const createProfileController = async (req, res)=>{

    let { userId, panNumber, aadharNumber, gstNumber, address } =  req.body;

    if( !userId || !panNumber || !aadharNumber || !gstNumber || !address){
        return res.status(404).json({massage : "All Field Required..."})
    }

    try {
        
        let existSeller = await userModel.findById(userId);

        if(!existSeller || existSeller.role != 'Seller' ){
            return res.status(404).json({massage : "invailid Seller please First Registration..."})
        }

        let sellerProfile = await SellerProfileModel.findOne({userId:userId})
        if(sellerProfile){
            return res.status(404).json({massage : "Already exist Seller..."})
        }

        let createProfile = await SellerProfileModel.create({
            userId,
            panNumber,
            aadharNumber,
            gstNumber,
            address
        })

        return res.status(201).json({
            massage : "Profile successfully created but status Pendding...please contact Admin...",
            result: createProfile
        })

    } catch (error) {
        return res.status(500).json({massage : `${error}, Server Error...`})
    }


}