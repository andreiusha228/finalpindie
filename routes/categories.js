const { sendAllCategories, sendCategoryCreated, sendCategoryUpdated, sendCategoryDeleted, sendCategoryById } = require('../controllers/categories');
const { findAllCategories, createCategory, updateCategory, checkEmptyName, checkIsCategoryExists, deleteCategory, findCategoryById } = require('../middlewares/categories');
const { checkAuth } = require('../middlewares/auth');

const categoriesRouter = require('express').Router();

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.post("/categories", findAllCategories, checkIsCategoryExists , checkEmptyName, checkAuth, createCategory, sendCategoryCreated);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.put("/categories/:id", checkEmptyName, checkAuth, updateCategory, sendCategoryUpdated);
categoriesRouter.delete("/categories/:id", deleteCategory, checkAuth, sendCategoryDeleted);

module.exports = categoriesRouter;