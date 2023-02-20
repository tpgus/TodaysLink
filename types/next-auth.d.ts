import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      id: string;
      userId: string;
      email?: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    userId: string;
    email?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      id: string;
      userId: string;
      email?: string;
    } & DefaultJWT["user"];
  }
}
