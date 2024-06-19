import express from 'express';

const gamesRouter = express.Router();

gamesRouter.get("/scores", (req, res) => {
    res.send("11");
})

export default gamesRouter;