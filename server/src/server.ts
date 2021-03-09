import { config } from "dotenv";
config();

import path from "path";

import express, { Application } from "express";
import morgan from "morgan";
import bodyParser from "body-parser";

import Pokemon from "./routes/pokemons";

const app: Application = express();

app.set("PORT", process.env.PORT);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/pokemon", Pokemon);

app.listen(app.get("PORT"), () => console.log(`Server on port: ${app.get("PORT")}`));