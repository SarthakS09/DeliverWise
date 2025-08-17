// backend/src/app.js
import express from "express";
import cors from "cors";

import healthRouter from "./routes/health.js";
import compareRouter from "./routes/compare.js";
import { env } from "./config/env.js";

const app = express();

// CORS setup
app.use(cors({ origin: env.CORS_ORIGIN.split(",").map(s => s.trim()) }));
app.use(express.json());

// Routes
app.use("/api/health", healthRouter);
app.use("/api/compare", compareRouter);

// Health check root
app.get("/", (_req, res) => {
  res.json({ name: "DeliverWise API", status: "ok" });
});

export default app;
