import { Router } from "express";
import { getAllUrls, createShortCode } from "@/controllers/url";

const router = Router();

router.post("/", createShortCode);
router.get("/", getAllUrls);

export default router;
