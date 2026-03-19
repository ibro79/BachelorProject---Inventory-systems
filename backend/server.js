import express from "express";
import Inventory from "./src/routers/Inventory.js";
import {connectDB} from "./src/config/db.js";
import dotenv from "dotenv";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
connectDB();

app.use("/api/Inventory", Inventory);


app.listen(PORT, () => {
    console.log(`server started on PORT: ${PORT}`);
});
