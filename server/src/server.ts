import express, { Application, Request, Response } from "express";
import path from "path";
const app: Application = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req: Request, res: Response) => {
	res.send("Hello");
});

app.listen(3000, () => console.log("Server running"));