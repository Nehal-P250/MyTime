import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import postRouter from "./router/posts.js";
import config from "./config.js";



const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRouter);

const db_user = process.env.DBUSER;
const db_password = process.env.PASSWORD;

// **** ---- ATLAS-REMOTE ---- **** 
// const CONNECTION_URL = `mongodb+srv://${db_user}:${db_password}@cluster0.cfumo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// console.log("Connection url => ", CONNECTION_URL, PORT);
// **** ---- ATLAS-REMOTE ---- **** 

const CONNECTION_URL = config.mongoLocalUrl;
const PORT = process.env.PORT || 8000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log("memory app backend, listening on port ", PORT);
        })
    })
    .catch((err) => {
        console.error(err.message);
    });

