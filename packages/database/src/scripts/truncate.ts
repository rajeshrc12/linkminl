import { prisma } from "../client.js";

async function main() {
  await prisma.$executeRawUnsafe(`
    TRUNCATE TABLE "Url" RESTART IDENTITY CASCADE;
  `);

  console.log("Table truncated and ID sequence reset");
}

main()
  .catch((error) => {
    console.error("Failed to delete data:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
