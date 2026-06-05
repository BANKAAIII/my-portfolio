import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import {Prisma} from "../../../generated/prisma/client";
export const handler = NextAuth({
  adapter: PrismaAdapter(Prisma), // <--- This magic line syncs OAuth user to your DB
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
});

export { handler as GET, handler as POST };