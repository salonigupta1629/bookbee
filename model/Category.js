import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  catTitle: String,
  catDescription: String,
});

const Category = mongoose.models?.Category || mongoose.model('Category', categorySchema);

export default Category;

