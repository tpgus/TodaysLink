import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

/*
기본적으로 next-auth에서 관리하는 토큰의 형태가 내가 관리할 토큰의 형태와 다를 경우

처음에는 node_modules type를 직접 수정해주었으나 개발환경에서는 통할지라도
배포환경에서는 에러가 발생함 -> node_modules를 아무리 바꿔도 적용되지 않음
따라서 공식문서에 나온대로 직접 타입을 정의해주는 것이 방법
 https://next-auth.js.org/getting-started/typescript

 아니면 아래와 같은 방법도 가능할 수도 
 https://next-auth.js.org/getting-started/client
*/

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
