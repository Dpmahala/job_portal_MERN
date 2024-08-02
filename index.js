import cookiParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import ConnectDB from "./utils/db.js";
dotenv.config({});

const app = express();

//middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookiParser());

const cookiOption = {
    origin: 'http//localhost:5173',
    credential: true
}
app.use(cors(cookiOption));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    ConnectDB();
    console.log(`Server is running ${PORT}`);
});