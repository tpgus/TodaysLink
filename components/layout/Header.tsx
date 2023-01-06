import React, { useState, useRef } from "react";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { HeaderContainer, Navigation } from "./style/style-header";

const Header = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const searchHandler = () => {
    alert("클릭!");
  };

  const inputSearchHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      alert(`엔터 눌림 :${searchInputRef.current!.value}`);
    }
  };

  const loginHandler = () => {
    alert("로그인 클릭");
  };

  return (
    <HeaderContainer>
      <Navigation>
        <div>
          <div>
            <Link href="/">로고</Link>
          </div>
          <div className="search-wrapper">
            <input
              onKeyPress={inputSearchHandler}
              ref={searchInputRef}
              type="text"
              placeholder="검색어를 입력하세요"
            />
            <button onClick={searchHandler}>
              <AiOutlineSearch size={20} />
            </button>
          </div>
          <div className="login-wrapper">
            <button onClick={loginHandler}>로그인</button>
          </div>
        </div>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
