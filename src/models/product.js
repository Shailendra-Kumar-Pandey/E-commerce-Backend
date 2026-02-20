import mongoose from "mongoose";

const productInformationSchema = new mongoose.Schema(
    {
        sellerID:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'sallerProfile'
        },
        productCategary:{
            type: String,
            enum:['Electronics','Fashion','Home','Beauty','Other'],
            required: true
        },
        subCategary:{
            type: String,
            enum:['Mobiles', 'tablets', 'laptops', 'cameras', 'speakers', 'chargers', 'Shirts', 'pants', 'dresses', 'sneakers', 'watches', 'Cookware', 'furniture', 'lighting', 'bath accessories', 'Makeup', 'skincare', 'fragrance', 'salon tools', 'Others' ],
            required: true
        },
        productName:{
            type: String,
            trim: true
        },
        price:{
            type:Number
        },
        discount:{
            type: Number
        },
        productURL:{
            type:String,
            trim: true
        },
        productDiscraption:{
            type: String,
            trim: true
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.model('productInformation', productInformationSchema)