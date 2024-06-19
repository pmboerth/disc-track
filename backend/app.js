import express from 'express'
import userRouter from './routes/users.js';
import gamesRouter from './routes/games.js';

const app = express();

app.use(express.json());

app.get("/healthcheck", (req, res) => {
    res.status(204).send();
});

app.use("/api/users", userRouter);
app.use("/api/games", gamesRouter);

export default app;


