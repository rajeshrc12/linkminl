import { prisma, User } from "@repo/db";
import { Request, Response } from "express";

export const getOriginalUrl = async (req: Request, res: Response) => {
  try {
    const { code } = req.params;
    const user = req?.user as User;

    const url = await prisma.url.findFirst({
      where: { shortCode: code as string, userId: user.id },
    });
    res.json(url);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error while fetching original url",
    });
  }
};
