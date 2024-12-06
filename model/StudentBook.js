import mongoose from "mongoose"

const StudentBookSchema = mongoose.Schema({
    bookId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "BookModel" },
    studentId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "StudentModel" }
}, { timestamps: true })

export default mongoose.models?.StudentBook || mongoose.model("StudentBook", StudentBookSchema);

