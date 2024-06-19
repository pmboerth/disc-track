import express from 'express';

const userRouter = express.Router();

userRouter.get("/:id", (req, res) => {
    let id = req.params.id;
    res.send(id);
})

userRouter.post("/", (req, res) => {
    let data = req.body;
    res.json(data);
})

export default userRouter;