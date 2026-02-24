import sellerProfile from '../models/SellerProfile.js'

export const getAllSellerProfile = async(req, res)=>{
    
    try {
        
        let fetchAllSeller = await sellerProfile.find()

        return res.status(200).json({
            massage : "Fetch All Seller Profile...",
            result: fetchAllSeller
        })

    } catch (error) {
        return res.status(500).json({massage : `${error}, Server Error...`})
    }
}


export const changeStatusSellerController = async(req, res)=>{

    let profileID = req?.params?.profileID
    // console.log(profileID);

    let {status, adminRemark} = req.body;

    if(!profileID){
        return res.status(404).json({massage: "please enter id required profile ID..."})
    }

    if(!status || !adminRemark){
        return res.status(404).json({massage : "All Field Required..."})
    }

    try {

        let existSeller = await sellerProfile.findById(profileID);

        if(!existSeller){
            return res.status(404).json({massage: "please enter Vailid profile ID..."})
        }

        if(existSeller.status != 'Approved'){

            existSeller.status = status;
            existSeller.adminRemark = adminRemark;
            status === 'Approved' ? existSeller.approvedAT = new Date() : null;
            await existSeller.save()
        }

        return res.status(201).json({
            massage : 'Seller Status Change by Admin...'
        })

    } catch (error) {
        
        return res,status(500).json({massage: `${error}, Server Error...`})
    }

}