import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "@/routes/auth.js";
import userRoutes from "@/routes/user.js";
import { authenticateToken } from "@/utils/middleware.js";

const app = express();

// ✅ CORS config
app.use(
  cors({
    origin: "http://localhost:5173", // your Vite frontend
    credentials: true, // allow cookies
  }),
);

app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoutes);
app.use("/user", authenticateToken, userRoutes);

export default app;
