import express from "express";
import { Task } from "../db.mjs";

const router = express.Router();

const authMiddleware = (req, res, next) => {
    if (!req.session.user) {
      return res.redirect("/login");
    }
    next();
  };

  // Research Topic: Task Sorting & Filtering
router.get("/", authMiddleware, async (req, res) => {
    const filter = { user: req.session.user._id };
    if (req.query.completed === "true") {
      filter.completed = true;
    } else if (req.query.completed === "false") {
      filter.completed = false;
    }

    let sortOption = {};
    if (req.query.sort === "dueDate") {
      sortOption = { dueDate: 1 };
    } else if (req.query.sort === "title") {
      sortOption = { title: 1 };
    }
  
    const tasks = await Task.find(filter).sort(sortOption);
    const completedTasks = (tasks.filter(task => task.completed)).map(task => task.title);
    const notCompletedTasks = tasks.filter(task => !task.completed).map(task => task.title);
    res.render("task-list", { tasks: tasks, completed :completedTasks, notCompleted: notCompletedTasks });
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

router.get("/:id/edit", authMiddleware, async (req, res) => {
    const task = await Task.findOne({ _id: req.params.id, user: req.session.user._id });
    if (!task) {
      return res.status(404).send("Task not found");
    }
    res.render("edit-task", { task });
  });

  router.post("/:id/edit", authMiddleware, async (req, res) => {
    const { title, description, dueDate, completed } = req.body;
    const task = await Task.findOne({ _id: req.params.id, user: req.session.user._id });
    if (!task) {
      return res.status(404).send("Task not found");
    }
  
    task.title = title;
    task.description = description;
    task.dueDate = dueDate;
    task.completed = (completed === "on") ? true : false;
  
    try {
      await task.save();
      res.redirect("/tasks");
    } catch (error) {
      res.status(500).send("Error updating task");
    }
  });

  router.post("/:id/delete", authMiddleware, async (req, res) => {
    await Task.deleteOne({ _id: req.params.id, user: req.session.user._id });
    res.redirect("/tasks");
  });

export default router;