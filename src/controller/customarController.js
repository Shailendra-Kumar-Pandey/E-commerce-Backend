import userModel from '../models/User.js';
import customarModel from '../models/customarProfile.js'

export const completeProfileController = async (req, res)=>{

    let {address, pinCode, imgURL } = req.body

    let userID = req?.headers;

    if(!address || !pinCode){
        return res.status(404).json({massage : "All field Required..."})
    }

    try {
        
        let existUser = await userModel.findById(userID)

        if(!existUser || existUser.role != 'Customar'){
            return res.status(404).json({massage : "Invailid User ID..."})
        }

        let completeData = await customarModel.create({
            userID: userID,
            address,
            pinCode,
            imgURL
        })

        return res.status(201).json({
            massage : `${existUser.fullName}, Profile successfully Completed...`,
            result: completeData
        })


    } catch (error) {
        return res.status(500).json({massage: `${error}, Server Error...`})
    }

}