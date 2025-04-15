import { Task } from "../src/db.mjs";
import mongoose from "mongoose";

describe("Task Model", () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.TEST_DSN || "mongodb://localhost/testdb");
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  test("Create a task", async () => {
    const newTask = new Task({ title: "Test Task", completed: false });
    await newTask.save();
    expect(newTask._id).toBeDefined();
    expect(newTask.title).toBe("Test Task");
  });

  test("Default 'completed' value should be false", async () => {
    const task = new Task({ title: "Complete me" });
    await task.save();
    expect(task.completed).toBe(false);
  });

  test("Task should be associated with a user", async () => {
    const dummyUserId = new mongoose.Types.ObjectId();
    const task = new Task({ title: "Task with user", user: dummyUserId });
    await task.save();
    expect(task.user.toString()).toBe(dummyUserId.toString());
  });
  
  test("Deleted task should not be found", async () => {
    const task = new Task({ title: "To be deleted" });
    await task.save();
    await Task.findByIdAndDelete(task._id);
    const found = await Task.findById(task._id);
    expect(found).toBeNull();
  });

});
