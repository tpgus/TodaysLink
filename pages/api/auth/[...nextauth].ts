import NextAuth from "next-auth";
import CredentialsProviders from "next-auth/providers/credentials";
import { db } from "../../../lib/firestore";
import { verifyPassword } from "../../../server/utils/encryption-utils";
import { collection, getDocs, query, where } from "firebase/firestore";
import type { NextAuthOptions } from "next-auth";

interface UserInfo {
  id: string;
  userId: string;
  password?: string;
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProviders({
      name: "Credentials",
      credentials: {
        userId: { label: "userId", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.password || !credentials?.userId) {
          throw new Error("아이디 또는 비밀번호를 확인해 주세요");
        }

        const usersRef = collection(db, "users");
        const q = query(usersRef, where("userId", "==", credentials.userId));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          throw new Error("존재하지 않는 사용자 정보입니다");
        }

        const userInfo = {
          ...(querySnapshot.docs[0].data() as UserInfo),
          id: querySnapshot.docs[0].id,
        };

        const isValidPassword = await verifyPassword(
          credentials.password,
          userInfo.password!
        );

        if (!isValidPassword) {
          throw new Error("비밀번호가 틀렸습니다");
        }

        //성공
        const user = { id: userInfo.id, userId: userInfo.userId };
        return user;
      },
    }),
  ],

  callbacks: {
    async session({ session, token }) {
      if (token.user) {
        session.user = token.user;
      }
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
};

export default NextAuth(authOptions);
