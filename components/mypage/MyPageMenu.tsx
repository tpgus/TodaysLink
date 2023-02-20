import * as S from "./style/style-MyPageMenu";
import Button from "../ui/Button";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

const MyPage = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    // 현재 경로 /mypage
    // 따라서 mypage의 getServerSideProps의 코드가 영향을 미침
    // router.replace("/");
  };

  return (
    <S.MyPageLayout>
      <ul className="menu">
        <li>
          <Button onClick={handleLogout}>로그아웃</Button>
        </li>
        <li>
          <Button onClick={() => router.push("/mypage/changePassword")}>
            비밀번호 변경
          </Button>
        </li>
      </ul>
    </S.MyPageLayout>
  );
};

export default MyPage;
