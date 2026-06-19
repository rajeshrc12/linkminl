import { Router } from "express";
import { getAllUrls, shortUrl } from "@/controllers/url";

const router = Router();

router.post("/", shortUrl);
router.get("/", getAllUrls);

export default router;
