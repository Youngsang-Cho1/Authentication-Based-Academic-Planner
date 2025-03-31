import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Todo list');
});

const PORT = process.env.PORT || 3000;