import { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import * as S from "./style/style-Search";

const Search = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const search = () => {
    // 실제 검색 요청과 관련된 코드
    alert("검색 시작");
  };

  const handleSearchBtnClick = () => {
    search();
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.key === "Enter" && search();
  };

  return (
    <S.SearchContainer>
      <input
        onKeyDown={handleKeyPress}
        ref={searchInputRef}
        type="text"
        placeholder="검색어를 입력하세요"
      />
      <button onClick={handleSearchBtnClick}>
        <AiOutlineSearch className="search-icon" size={20} />
      </button>
    </S.SearchContainer>
  );
};

export default Search;
