import Category from '../models/category.model.js';
import { asyncHandler } from '../middlewares/error.middleware.js';

export const createCategory = asyncHandler(async (request, response, next) => {
  try {
    const { categoryName } = request.body;

    const newCategory = new Category({
      categoryName,
    });

    await newCategory.save();
    response.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
});
