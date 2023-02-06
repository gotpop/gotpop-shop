import NextAuth, { NextAuthOptions } from "next-auth"

import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@lib/prisma"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.JWT_SECRET,
  events: {
    createUser: async ({user}) => {
      const theCart = await prisma.cart.create({
        data: {
          user: {
            connect: {
              id: user.id
            }
          }
        }
      })
    },
    signIn: ({ user, isNewUser }) => {
      // console.log('user, isNewUser :', user, isNewUser);
    },
  }
}

export default NextAuth(authOptions)