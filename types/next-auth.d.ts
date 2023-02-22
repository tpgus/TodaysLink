import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

/*
next-auth에서 관리하는 토큰의 형태가 내가 관리할 토큰의 형태와 다를 경우

처음에는 node_modules type를 직접 수정해 주었으나 개발환경에서는 문제가 없을지라도
배포환경에서는 에러가 발생함 -> node_modules를 아무리 바꿔도 배포시 적용되지 않음
따라서 공식문서에 나온대로 직접 타입을 정의해주는 것이 방법, 
https://next-auth.js.org/getting-started/typescript
또한 라이브러리 사용시 타입을 직접 정의할 필요가 있는경우 .d.ts 파일을 정의해야 한다.
*/

declare module "next-auth" {
  interface Session {
    user: {
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
