import express from "express";

const app = express();

app.get("/", (_, res) => {
  res.json({ status: "ok" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
});
