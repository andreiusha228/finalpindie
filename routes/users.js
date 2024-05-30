const { sendAllUsers, sendUserCreated, sendUserUpdated, sendUserDeleted, sendMe, sendUserById } = require('../controllers/users');
const { findUserById, findAllUsers, createUser, updateUser, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail, checkIsUserExists, deleteUser, hashPassword } = require('../middlewares/users');
const { checkAuth } = require('../middlewares/auth');

const usersRouter = require('express').Router();

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.post("/users", findAllUsers, checkIsUserExists, checkEmptyNameAndEmailAndPassword, checkAuth, hashPassword, createUser, sendUserCreated);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.put("/users/:id", checkEmptyNameAndEmail, checkAuth, updateUser, sendUserUpdated);
usersRouter.delete("/users/:id", deleteUser, checkAuth, sendUserDeleted);
usersRouter.get("/me", checkAuth, sendMe);

module.exports = usersRouter;