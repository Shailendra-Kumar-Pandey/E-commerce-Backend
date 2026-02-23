import mongoose from "mongoose";

const sellerProfileSchema = new mongoose.Schema(
    {
        userId:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'user'
        },
        panNumber:{
            type:String,
            trim:true,
            minlength:11,
            required:true
        },
        aadharNumber:{
            type:Number,
            minlength:12,
            required: true,
        },
        gstNumber:{
            type: String,
            trim: true,
            required: true
        },
        address:{
            type:String,
            trim:true,
            required:true
        },
        status:{
            type: String,
            enum:['Pandding','Approved','Rejected'],
            default:'Pandding'
        },
        adminRemark:{
            type: String,
            trim: true
        },
        approvedAT:{
            type: Date
        }

    },
    {
        timestamps:true
    }
)

export default mongoose.model('sallerProfile', sellerProfileSchema );