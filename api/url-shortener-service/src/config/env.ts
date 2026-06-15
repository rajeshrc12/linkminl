import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT || 3001,

  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID!,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET!,

  JWT_SECRET: process.env.JWT_SECRET!,
  DATABASE_URL: process.env.DATABASE_URL!,

  SQIDS_ALPHABET: process.env.SQIDS_ALPHABET!,
};
