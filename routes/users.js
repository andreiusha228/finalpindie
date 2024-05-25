const { sendAllUsers, sendUserCreated, sendUserUpdated, sendUserDeleted } = require('../controllers/users');
const { findUserById, findAllUsers, createUser, updateUser, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail, checkIsUserExists, deleteUser, hashPassword } = require('../middlewares/users');

const usersRouter = require('express').Router();

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.post("/users", findAllUsers, checkIsUserExists, checkEmptyNameAndEmailAndPassword, hashPassword, createUser, sendUserCreated);
usersRouter.put("/users/:id", checkEmptyNameAndEmail, updateUser, sendUserUpdated);
usersRouter.delete("/users/:id", deleteUser, sendUserDeleted);

module.exports = usersRouter;