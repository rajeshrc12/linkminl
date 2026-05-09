import { googleClient } from "@/services/google.js";
import { generateAccessToken } from "@/utils/jwt.js";

export const getGoogleAuthUrl = () => {
  return googleClient.generateAuthUrl({
    access_type: "offline",
    scope: ["openid", "email", "profile"],
  });
};

export const loginWithGoogle = async (code: string) => {
  const { tokens } = await googleClient.getToken(code);

  if (!tokens.id_token) {
    throw new Error("No id token");
  }

  const ticket = await googleClient.verifyIdToken({
    idToken: tokens.id_token,
    audience: process.env.GOOGLE_CLIENT_ID,
  });

  const payload = ticket.getPayload();

  if (!payload) {
    throw new Error("Invalid google token");
  }

  const user = {
    googleId: payload.sub,
    email: payload.email,
    name: payload.name,
    avatar: payload.picture,
  };

  // TODO: save/find user in database

  const accessToken = generateAccessToken({
    sub: user.googleId,
    email: user.email,
  });

  return {
    user,
    accessToken,
  };
};
