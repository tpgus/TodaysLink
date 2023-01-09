import { useState } from "react";
import { HeaderContainer } from "./style/style-Header";
import { useRouter } from "next/router";
import Logo from "../ui/Logo";
import Search from "./Search";
import TagList from "../tags/TagList";
import Button from "../ui/Button";
import Hamburger from "../mobile-only/hamburger/Hamburger";

const IGNORE_ROUTE = ["/qna"];

const Header = () => {
  const router = useRouter();
  const [isClickedHamburger, setIsClickedHamburger] = useState(false); // 모바일 햄버거 버튼 상태

  //모바일 햄버거 클릭 핸들러
  const clickHamburgerHandler = () => {
    setIsClickedHamburger((prevState) => !prevState);
  };

  const loginHandler = () => {
    alert("로그인 클릭");
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
          <div className="pc-tablet-only">
            <Button onClick={loginHandler}>로그인</Button>
            <Button onClick={() => router.push("/qna")}>Q&A</Button>
          </div>
        </div>
      </nav>
      {IGNORE_ROUTE.includes(router.pathname) ? null : <TagList />}
    </HeaderContainer>
  );
};

export default Header;
