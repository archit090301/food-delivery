import { PrismaNeon } from "@prisma/adapter-neon";

const url = process.env.DATABASE_URL!;

export default {
  schema: "./prisma/schema.prisma",
  adapter: new PrismaNeon(url),
};
