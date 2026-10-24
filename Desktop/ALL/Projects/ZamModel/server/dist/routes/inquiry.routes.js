import { Router } from "express";
import { createInquiry } from "../controllers/inquiry.controller.js";
export const inquiryRoutes = Router();
inquiryRoutes.post("/", createInquiry);
//# sourceMappingURL=inquiry.routes.js.map