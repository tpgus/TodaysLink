import * as S from "./style/style-MyPageMenu";
import Button from "../ui/Button";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

const MyPageMenu = () => {
  const router = useRouter();

  const handleLogout = async () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      await signOut();
    }
    // 현재 경로 /mypage
    // 따라서 mypage의 getServerSideProps의 리다이렉트 코드가 영향을 미침
    // router.replace("/"); 영향 x
  };

  return (
    <S.MyPageLayout>
      <S.MenuContainer>
        <h2>마이페이지</h2>
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
      </S.MenuContainer>
    </S.MyPageLayout>
  );
};

export default MyPageMenu;
