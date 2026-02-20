import mongoose from "mongoose";

const customarAppProductSchema = new mongoose.Schema(
    {
        userID:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'customarProfile'
        },
        productID:{
            type: mongoose.Schema.Types.ObjectId,
            ref:'prodeuctInformation'
        },
        productNumber:{
            type: Number
        }
    },
    {
        timestamps: true
    }
)


export default mongoose.model('customarAddProduct', customarAppProductSchema)