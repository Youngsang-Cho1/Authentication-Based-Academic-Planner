import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();
mongoose.connect(process.env.DSN);

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

