import express from 'express';

const userRouter = express.Router();

userRouter.post("/", (req, res) => {
    res.send('Create User');
})


userRouter
 .route("/:id")
 .get((req, res) => {
    res.send('Get User With ID ${req.params.id}');
 })
 .put((req, res) => {
    res.send('Update User With ID ${req.params.id}');
 })
 .delete((req, res) => {
    res.send('Delete User With ID ${req.params.id}');
 })

export default userRouter;