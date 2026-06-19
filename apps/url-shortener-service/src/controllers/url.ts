import { decodeId, encodeId } from "@/utils/url";
import { prisma, User } from "@repo/db";
import { Request, Response } from "express";

let counter = 0;

export const shortUrl = async (req: Request, res: Response) => {
  try {
    const { url } = req.body;
    const user = req?.user as User;

    counter++;
    const urlResponse = await prisma.url.create({
      data: { original: url, shortCode: encodeId(counter), userId: user.id },
    });
    res.json(urlResponse);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error while generating Url Code",
    });
  }
};

export const getAllUrls = async (req: Request, res: Response) => {
  try {
    const user = req?.user as User;

    const urls = await prisma.url.findMany({
      where: { userId: user.id },
    });
    res.json(urls);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error while generating Url Code",
    });
  }
};
