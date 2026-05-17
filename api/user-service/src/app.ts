import express from "express";
import authRoutes from "@/routes/auth.js";

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/me", authRoutes);

export default app;
