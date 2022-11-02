// import { MongoClient } from "mongodb";
import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient;
}
