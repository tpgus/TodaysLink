import { useState } from "react";
import { HeaderContainer } from "./style/style-Header";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import Logo from "../ui/Logo";
import Search from "./Search";
import Hamburger from "./mobile-only/hamburger/Hamburger";

const NAVIGATION_MENU = [
  { name: "FAQ", path: "/help/faq" },
  { name: "Q&A", path: "/help/qna" },
  { name: "로그인", path: "/auth/signIn" },
];

const Header = () => {
  const [isClickedHamburgerBtn, setIsClickedHamburgerBtn] = useState(false); // 모바일 햄버거 버튼
  const router = useRouter();
  const currentPath = router.pathname;

  const handleHamburgerBtnClick = () => {
    setIsClickedHamburgerBtn((prevState) => !prevState);
  };

  const isActivePath = (pathname: string) => {
    return currentPath.includes(pathname);
  };

  return (
    <HeaderContainer>
      <nav>
        <div className="nav-wrapper">
          <Logo />
          <Search />
          {/* 모바일에서만 보이는 햄버거 버튼*/}
          <div className="mobile-only">
            <Hamburger
              isClickedHamburger={isClickedHamburgerBtn}
              onClickHamburger={handleHamburgerBtnClick}
            />
          </div>
          <ul className="pc-tablet-only">
            <li>
              {NAVIGATION_MENU.map((menu) => (
                <Link
                  href={menu.path}
                  key={uuidv4()}
                  className={
                    "nav__link" + `${isActivePath(menu.path) ? " active" : ""}`
                  }
                >
                  {menu.name}
                </Link>
              ))}
            </li>
          </ul>
        </div>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
