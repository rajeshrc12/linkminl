import { Router } from "express";
import { getOriginalUrl } from "@/controllers/url";

const router = Router();

router.get("/:code", getOriginalUrl);

export default router;
