const { sendAllCategories, sendCategoryCreated, sendCategoryUpdated, sendCategoryDeleted } = require('../controllers/categories');
const { findAllCategories, createCategory, updateCategory, checkEmptyName, checkIsCategoryExists, deleteCategory } = require('../middlewares/categories');

const categoriesRouter = require('express').Router();

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.post("/categories", checkIsCategoryExists , checkEmptyName, createCategory, sendCategoryCreated);
categoriesRouter.put("/categories/:id", checkEmptyName, updateCategory, sendCategoryUpdated);
categoriesRouter.delete("/categories/:id", deleteCategory, sendCategoryDeleted);

module.exports = categoriesRouter;