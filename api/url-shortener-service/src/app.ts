import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import urlRoutes from "@/routes/url.js";

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

app.use("/url", urlRoutes);

export default app;
