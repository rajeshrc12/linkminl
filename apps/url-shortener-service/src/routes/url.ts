import { Router } from "express";
import { shortUrl } from "@/controllers/url";

const router = Router();

router.post("/", shortUrl);

export default router;
