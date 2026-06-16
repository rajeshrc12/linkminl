import { decodeId, encodeId } from "@/utils/url.js";
import { Request, Response } from "express";

let counter = 0;

export const shortUrl = async (req: Request, res: Response) => {
  try {
    const { url } = req.body;
    counter++;
    res.json({
      encodedUrlCode: encodeId(counter),
      counter,
      url,
      decodedUrl: decodeId(url),
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "User not found",
    });
  }
};
