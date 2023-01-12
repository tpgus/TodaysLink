import { useState } from "react";
import { HeaderContainer } from "./style/style-Header";
import { useRouter } from "next/router";
import Link from "next/link";
import Logo from "../ui/Logo";
import Search from "./Search";
import Hamburger from "../mobile-only/hamburger/Hamburger";

const Header = () => {
  const [isClickedHamburger, setIsClickedHamburger] = useState(false); // 모바일 햄버거 버튼 상태

  //모바일 햄버거 클릭 핸들러
  const clickHamburgerHandler = () => {
    setIsClickedHamburger((prevState) => !prevState);
  };

  return (
    <HeaderContainer>
      <nav>
        <div className="nav-wrapper">
          <Logo />
          <Search />
          <div className="mobile-only">
            {/* 모바일에서만 보이는 햄버거 */}
            <Hamburger
              isClickedHamburger={isClickedHamburger}
              clickHamburgerHandler={clickHamburgerHandler}
            />
          </div>
          <div className="pc-tablet-only menu">
            <Link href={"/member/login"}>로그인</Link>
            <Link href={"/help/faq"}>FAQ</Link>
          </div>
        </div>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
