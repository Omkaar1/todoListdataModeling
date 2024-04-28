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
    description:{
        type:String,
        requried: true,
    },
    name:{
        type:String,
        requried: true,
    },
    productImage:{
        type:String
    },
    price:{
        type:Number,
        default:0,        
    },
    stock:{
        type:Number,
        default:0,        
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        requried:true
    },
    orderItems:{
        type:[orderItemSchema]
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
    }
},{timestamps:true});

export const Product = mongoose.model("Prduct",productSchema) 