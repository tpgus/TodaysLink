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
          <div className="pc-tablet-only menu">
            {NAVIGATION_MENU.map((menu) => (
              <Link
                href={menu.path}
                key={uuidv4()}
                className={router.pathname === menu.path ? "active" : ""}
              >
                {menu.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
