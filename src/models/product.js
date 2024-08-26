import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name:{ type: String, required:true},
    price: { type: Number, required:true},
    description:{ type: String, required:true},
    author: {type: String, required:true},
    image: { type: String, required:true},
    discount:{type: Boolean, required:true,default:false},
    percentage:{type: Number, required:true}
    
}
  
);

export default mongoose.models.product || mongoose.model("product", productSchema);