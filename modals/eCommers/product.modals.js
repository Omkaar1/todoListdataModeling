import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
   productId:{ 
       type:mongoose.Schema.Types.ObjectId,
       ref:"Product"
    },
    quantity:{
        type:Number,
        required:true
    }
})

const productSchema = new mongoose.Schema({
    productImage:{
        type:String
    },
    name:{
        type:String,
        requried: true,
    },
    description:{
        type:String,
        requried: true,
    },
    price:{
        type:Number,
        default:0,        
    },
    stock:{
        type:Number,
        default:0,        
    },
    address:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['PENDING',"CANCELED","DELIVERED"],
        default:true,
        reuired:true
    },
    orderItems:{
        type:[orderItemSchema]
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        requried:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true
    }
},{timestamps:true});

export const Product = mongoose.model("Prduct",productSchema) 