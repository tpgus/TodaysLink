import * as S from "./style/style-Search";
import { AiOutlineSearch } from "react-icons/ai";
import { useRef, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store";
import { setSearchValue } from "../../store/searchOptionSlice";

const Search = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const { searchValue } = useAppSelector((state) => state.searchOption);

  const search = () => {
    // 실제 검색 요청과 관련된 코드
    if (searchInputRef.current === null) return;
    dispatch(setSearchValue(searchInputRef.current!.value));
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
