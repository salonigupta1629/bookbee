import mongoose from "mongoose"

const BookSchema = mongoose.Schema({
    bookName: { type: String, required: true },
    bookPrice: { type: Number },
    authorName: { type: String, required: true },
    bookCategory: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Category" },
    bookCount: { type: Number, required: true },
}, { timestamps: true })

export default mongoose.models?.Book || mongoose.model("Book", BookSchema);
