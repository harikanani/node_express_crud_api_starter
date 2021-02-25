import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import usersRoutes from "./routes/users.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use("/people", usersRoutes);
app.get("/", (req, res) => res.send({ msg: "There is nothing here. Route through other API." }));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));
