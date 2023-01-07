import { HeaderContainer } from "./style/style-Header";
import Logo from "./Logo";
import Search from "./Search";

const Header = () => {
  const loginHandler = () => {
    alert("로그인 클릭");
  };

  return (
    <HeaderContainer>
      <nav>
        <div className="nav-wrapper">
          <Logo />
          <Search />
          <div className="login-wrapper">
            <button onClick={loginHandler}>로그인</button>
          </div>
        </div>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
