import express from "express";
import { sendData } from "@/app.js";

const app = express();

app.get("/", (_req, res) => {
  const data = sendData();
  res.send(data);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
