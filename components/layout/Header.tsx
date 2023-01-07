import { HeaderContainer } from "./style/style-Header";
import { useRouter } from "next/router";
import Logo from "./Logo";
import Search from "./Search";
import TagList from "../tag/TagList";

const ignoreRoute = ["/qna"];

const Header = () => {
  const router = useRouter();

  const loginHandler = () => {
    alert("로그인 클릭");
  };

  return (
    <HeaderContainer>
      <nav>
        <div className="nav-wrapper">
          <Logo />
          <Search />
          <div className="menu-wrapper">
            <button onClick={loginHandler}>로그인</button>
            <button onClick={() => router.push("/qna")}>Q&A</button>
          </div>
        </div>
      </nav>
      {ignoreRoute.includes(router.pathname) ? null : <TagList />}
    </HeaderContainer>
  );
};

export default Header;
