import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      trim: true,
      minlength: 5,
      required: true,
    },
    email:{
        type:String,
        required: true,
        trim : true,
        unique: true
    },
    phone:{
        type: String,
        required: true,
        trim:true,
        minlength:10
    },
    password:{
        type: String,
        trim:true,
        minlength:6,
        required: true,
    },
    role:{
        type: String,
        enum : ['Admin','Customar','Saller'],
        required: true
    },
    isActive:{
        type:Boolean,
        default:true
    }
  },
  {
    timestamps: true,
  },
);


export default mongoose.model('user', userSchema);