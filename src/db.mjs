import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();
export const connectToDB = async (dsn = process.env.DSN) => {
    if (mongoose.connection.readyState === 0) {
      try {
        await mongoose.connect(dsn);
        console.log("MongoDB Connected");
      } catch (err) {
        console.error("Connection Error:", err);
      }
    }
  };

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    dueDate: Date,
    completed: { type: Boolean, default: false },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: false },
    email: { type: String, required: true, unique: false },
    password: { type: String, required: true },
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }] // Reference to Task
});

export const Task = mongoose.model('Task', TaskSchema);
export const User = mongoose.model('User', UserSchema);

