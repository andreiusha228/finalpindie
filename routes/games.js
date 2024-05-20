const { sendAllGames, sendGameCreated, sendGameUpdated, sendGameDeleted } = require('../controllers/games');
const { findAllGames, createGame, updateGame, checkEmptyFields, checkIsGameExists, checkIfCategoriesAvaliable, checkIfUsersAreSafe, findGameById, deleteGame } = require('../middlewares/games');

const gamesRouter = require('express').Router();

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.post("/games", checkIsGameExists, checkIfCategoriesAvaliable ,  checkEmptyFields, createGame, sendGameCreated);
gamesRouter.put("/games/:id", findGameById, checkIfUsersAreSafe, checkIfCategoriesAvaliable , checkEmptyFields, updateGame, sendGameUpdated);
gamesRouter.delete("/games/:id", deleteGame, sendGameDeleted);

module.exports = gamesRouter;