import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // check if the database is connected
  await prisma
    .$connect()
    .then(() => console.log("Connected to database 🗄"))
    .catch((err) => console.log(err));
}

main();

export interface Context {
  prisma: PrismaClient;
  req: any; // HTTP request carrying the `Authorization` header
}

export function createContext(req: any): Context {
  return {
    prisma,
    req,
  };
}
