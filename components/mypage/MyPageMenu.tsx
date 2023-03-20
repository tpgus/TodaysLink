import * as S from "./style/style-MyPageMenu";
import Button from "../ui/Button";
import { Session } from "next-auth";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

interface PropsType {
  session: Session;
}

const MyPageMenu = (props: PropsType) => {
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
        <div className="menu">
          <p className="login-info">아이디 : {props.session.user.userId}</p>
          <ul className="menu_ul">
            <li>
              <button onClick={() => router.push("/mypage/myEvent")}>
                이벤트 참여 기록
              </button>
            </li>
            <li>
              <button onClick={() => router.push("/mypage/changePassword")}>
                비밀번호 변경
              </button>
            </li>
            <li>
              <button onClick={handleLogout}>로그아웃</button>
            </li>
          </ul>
        </div>
      </S.MenuContainer>
    </S.MyPageLayout>
  );
};

export default MyPageMenu;
