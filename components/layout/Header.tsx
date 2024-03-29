import * as S from "./style/style-Header";
import Link from "next/link";
import Logo from "../ui/Logo";
import Search from "./Search";
import Hamburger from "./mobile-only/hamburger/Hamburger";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { v4 as uuidv4 } from "uuid";

const NAVIGATION_MENU = [
  { name: "FAQ", path: "/help/faq" },
  { name: "Q&A", path: "/help/qna" },
];

const Header = () => {
  const [isClickedHamburgerBtn, setIsClickedHamburgerBtn] = useState(false); // 모바일 햄버거 버튼 활성화
  const { data: session, status } = useSession();
  const router = useRouter();
  const currentPath = router.pathname;

  const handleHamburgerBtnClick = () => {
    setIsClickedHamburgerBtn((prevState) => !prevState);
  };

  const isActivePath = (pathname: string) => {
    return currentPath.includes(pathname);
  };

  return (
    <S.HeaderContainer>
      <nav>
        <div className="nav-wrapper">
          <Logo />
          {/* <Search /> */}
          <div className="mobile-only">
            {/* 모바일에서만 보이는 햄버거 버튼*/}
            <Hamburger
              isClickedHamburger={isClickedHamburgerBtn}
              onClickHamburger={handleHamburgerBtnClick}
            />
          </div>
          {status !== "loading" ? (
            <ul className="pc-tablet__ul">
              {NAVIGATION_MENU.map((menu) => (
                <li key={uuidv4()} className="pc-tablet__li">
                  <Link
                    href={menu.path}
                    className={
                      "nav__link" +
                      `${isActivePath(menu.path) ? " active" : ""}`
                    }
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}

              {!session ? (
                <li className="pc-tablet__li">
                  <Link href="/auth/signIn" className={"nav__link"}>
                    로그인
                  </Link>
                </li>
              ) : null}
              {session && status === "authenticated" ? (
                <li className="pc-tablet__li">
                  <Link
                    href="/mypage"
                    className={
                      "nav__link" +
                      `${isActivePath("/mypage") ? " active" : ""}`
                    }
                  >
                    마이페이지
                  </Link>
                </li>
              ) : null}
            </ul>
          ) : null}
        </div>
      </nav>
    </S.HeaderContainer>
  );
};

export default Header;
