
import * as express from "express"; 
import { getCaegoryDetailsForMongo, getCategoryDetailsForPostgres } from "../controllers/categoryControllers";

export const categoryRouter = express.Router();

categoryRouter.route("/postgres/:categoryId").get(getCategoryDetailsForPostgres);
categoryRouter.route("/mongo/:categoryId").get(getCaegoryDetailsForMongo);





