import { encodeId } from "@/utils/url.js";
import { Request, Response } from "express";

let counter = 0;
export const shortUrl = async (req: Request, res: Response) => {
  try {
    counter++;
    res.json({ url: encodeId(counter), counter });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "User not found",
    });
  }
};
