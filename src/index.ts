import process from 'process';
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import connectDb from './db';
dotenv.config();

const PORT = parseInt(process.env.PORT || '3000');
const app = express();
app.use(express.json()); // for body-parsing application/json
app.use(morgan('dev'))
app.get('/', (_req, res) => {
    res.send({nir: []})
});
app.listen(PORT, () => {
    connectDb()
    .then(() => console.log(`Server is running on port ${PORT}`))
    .catch(console.error);
});