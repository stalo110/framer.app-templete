import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import { errorHandler } from "./middleware/error-handler.js";
import { apiRoutes } from "./routes/index.js";

export const app = express();
const allowedOrigin = process.env.WEB_ORIGIN ?? "http://localhost:5173";
const allowedOrigins = new Set([allowedOrigin]);
if (process.env.NODE_ENV !== "production") {
  allowedOrigins.add("http://localhost:5173");
  allowedOrigins.add("http://localhost:5174");
}

app.disable("x-powered-by");
app.use(helmet());
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.has(origin)) callback(null, true);
      else callback(null, false);
    },
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  }),
);
app.use("/api/payments/webhook", express.raw({ type: "application/json" }));
app.use(express.json({ limit: "32kb" }));
app.get("/api/health", (_request, response) => response.json({ status: "ok" }));
app.use(
  "/api",
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: "draft-7",
    legacyHeaders: false,
  }),
);
app.use("/api", apiRoutes);
app.use(errorHandler);
