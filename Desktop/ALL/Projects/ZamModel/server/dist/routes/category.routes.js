import { Router } from "express";
import { listCategories } from "../controllers/category.controller.js";
export const categoryRoutes = Router();
categoryRoutes.get("/", listCategories);
//# sourceMappingURL=category.routes.js.map