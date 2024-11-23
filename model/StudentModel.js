import mongoose from "mongoose";

const StudentSchema = mongoose.Schema({
    studentRoll: {type:String, required:true},
    studentName: {type:String, required:true},
    studentEmail: {type:String, required:true},
    studentPhone: {type:Number, required:true},
    studentBranch: {type:String, required:true},
})

export default mongoose.models.Student || mongoose.model("Student",StudentSchema);