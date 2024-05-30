const sendAllGames = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.gamesArray));
};

const sendGameCreated = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.game));
};


const sendGameUpdated = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send({ message: "Игра обновлена" });
};

const sendGameDeleted = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.category));
  };

const sendGameById = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.game));
}; 

module.exports = { sendGameCreated, sendAllGames, sendGameUpdated, sendGameDeleted, sendGameById };