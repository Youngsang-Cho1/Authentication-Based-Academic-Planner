import express from "express";
import { Task } from "../db.mjs";

const router = express.Router();

const authMiddleware = (req, res, next) => {
    if (!req.session.user) {
      return res.redirect("/login");
    }
    next();
  };

router.get("/", authMiddleware, async (req, res) => {
    const tasks = await Task.find({user: req.session.user._id}).sort({dueDate: 1});
    res.render("task-list", { tasks });
});

router.post("/", authMiddleware, async(req,res) => {
    const {title, description, dueDate} = req.body;
    try {
        const newTask = new Task ({title: title, description: description, dueDate: dueDate, completed:false, user: req.session.user._id})
        await newTask.save()
        res.redirect("/tasks")
    }
    catch (error){
        res.status(500).send("Error creating task");
    }
});

router.get("/new", authMiddleware, (req,res) => {
    res.render("new-task");
});

export default router;