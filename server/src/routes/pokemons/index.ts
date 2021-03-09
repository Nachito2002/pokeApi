import { Router, Request, Response, NextFunction } from "express";
import Axios from "axios";

const router = Router();

import type from "./type";

router.get("/", (req: Request, res: Response, next: NextFunction) => {
	Axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=30")
		.then(response => {
			res.status(200).json(response.data);
		})
		.catch(err => {
			next(err);
		});
});

router.get("/id/:id", (req: Request, res: Response, next: NextFunction) => {	
	const { id } = req.params;
	Axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
		.then(response => {
			res.status(200).json(response.data);
		})
		.catch(err => {
			next(err);
		});
});

router.use("/type", type);
	
router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	console.error(err);
	res.status(500).end();
	next();
});

export default router;