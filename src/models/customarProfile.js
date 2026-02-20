import mongoose from "mongoose";

const customarProfileSchema = new mongoose.Schema(
    {
        userID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        },
        imgURL:{
            type: String,
            trim: true
        },
        address:{
            type: String,
            trim: true,
            required:true
        },
        pinCode:{
            type: Number,
            required: true
        }
    },
    {
        timestamps: true,
    }
)

export default mongoose.model('customarProfile', customarProfileSchema)