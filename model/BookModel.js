import mongoose from "mongoose"
import Category from "./Category";


const BookSchema = mongoose.Schema({
    bookName: {type:String,required:true},
    bookPrice: {type:Number,required:true},
    authorName: {type:String,required:true},
    bookCategory: {type:mongoose.Schema.Types.ObjectId,required:true,ref: "Category"},
    bookCount: {type:Number,required:true},
},{timestamps:true})

export default mongoose.models?.Book || mongoose.model("Book",BookSchema);