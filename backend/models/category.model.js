import { Schema, model } from 'mongoose';

const categorySchema = new Schema({
  categoryName: {
    type: String,
    required: [true, 'Category name is required'],
  },
});

const Category = model('Category', categorySchema);

export default Category;
