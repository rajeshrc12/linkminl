import { Router } from "express";
import { shortUrl } from "@/controllers/url.js";

const router = Router();

router.post("/", shortUrl);

export default router;
