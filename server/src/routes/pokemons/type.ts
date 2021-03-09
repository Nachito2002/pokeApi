import { Router, Request, Response, NextFunction } from "express";
import Axios from "axios";

const router = Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
	Axios.get("https://pokeapi.co/api/v2/type")
		.then(response => {
			res.status(200).json(response.data);
		})
		.catch(err => {
			next(err);
		});
});

router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
	const { id } = req.params;
	Axios.get(`https://pokeapi.co/api/v2/type/${id}`)
		.then(response => {
			res.status(200).json(response.data);
		})
		.catch(err => {
			next(err);
		});
});

export default router;