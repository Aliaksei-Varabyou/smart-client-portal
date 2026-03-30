import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {},
        password: {}
      },
      async authorize(credentials: Record<"email" | "password", string> | undefined) {
        // test user
        if (credentials?.email === 'test123' && credentials?.password === '123456') {
          return {
            id: "1",
            email: "test123"
          }
        }
        return null;
      }
    }),
  ],
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: "auth/login"
  }
};

