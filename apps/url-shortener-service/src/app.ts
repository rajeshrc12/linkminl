import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import urlRoutes from "@/routes/url.js";
import { authenticateToken } from "@/utils/middleware";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

app.use("/url", authenticateToken, urlRoutes);

export default app;
