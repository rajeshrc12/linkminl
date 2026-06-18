import "dotenv/config";
import { prisma } from "@repo/db";
import express from "express";

const app = express();

app.get("/", async (_, res) => {
  const user = await prisma.user.findFirst({});
  res.json(user);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
});
