
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title : {type : string , required : true},
    slug : {type : string , required : true,unique : true},
    desc : {type : string,required :true},
    img : {type : string,required :true},
    category : {type : string,required :true},
    size : {type : string,},
    color : {type : string,required :true},
    price : {type : string,required :true},
    availability : {type : string,required :true},
},{timestamps: true});

export default mongoose.model("product", ProductSchema);