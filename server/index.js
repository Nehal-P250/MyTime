import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";




const app = express();

app.listen(8000, () => {
    console.log("memory app backend, listening on port 8000");
})