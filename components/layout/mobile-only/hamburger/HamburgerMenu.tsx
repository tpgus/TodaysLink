import * as S from "./style/style-HamburgerMenu";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import { BiUser } from "react-icons/bi";
import { useSession } from "next-auth/react";
import { BsQuestionCircle } from "react-icons/bs";
import { RiQuestionAnswerLine } from "react-icons/ri";
import type { PropsType } from "./Hamburger";

const NAV_MENU = [
  // { name: "로그인", path: "/auth/signIn", icon: <BiUser /> },
  { name: "FAQ", path: "/help/faq", icon: <BsQuestionCircle /> },
  { name: "Q&A", path: "/help/qna", icon: <RiQuestionAnswerLine /> },
];

const HamburgerMenu = (props: PropsType) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleClickMenu = (path: string) => {
    props.onClickHamburger();
    router.push(path);
  };

  return (
    <>
      {props.isClickedHamburger ? (
        <S.Backrop onClick={props.onClickHamburger} />
      ) : null}
      <S.MenuContainer isClicked={props.isClickedHamburger}>
        {!session && status === "unauthenticated" ? (
          <li onClick={() => handleClickMenu("/auth/signIn")}>
            <BiUser />
            <span>로그인</span>
          </li>
        ) : null}
        {session && status === "authenticated" ? (
          <li onClick={() => handleClickMenu("/mypage")}>
            <BiUser />
            <span>마이페이지</span>
          </li>
        ) : null}
        {NAV_MENU.map((menu) => (
          <li key={uuidv4()} onClick={() => handleClickMenu(menu.path)}>
            {menu.icon}
            <span>{menu.name}</span>
          </li>
        ))}
      </S.MenuContainer>
    </>
  );
};

export default HamburgerMenu;
