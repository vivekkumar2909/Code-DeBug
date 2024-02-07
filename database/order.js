
import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    usedId : {type : string , required : true},
    products : [{
        productsId :{type : string , required : true},
        quantity : {type : string , default : 1 , required : true}
    }],
    addresses : {type : string , required : true},
    amount : {type : Number , required : true},
    status : {type : string , default : "Pending", required : true}
},{timestamps: true});

export default mongoose.model("order", OrderSchema);