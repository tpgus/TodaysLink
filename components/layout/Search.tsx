import { useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { SearchContainer } from "./style/style-Search";

const Search = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);

  const searchHandler = () => {
    alert("검색 클릭!");
  };

  const inputSearchHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      alert(`엔터 눌림 :${searchInputRef.current!.value}`);
    }
  };

  return (
    <SearchContainer>
      <input
        onKeyPress={inputSearchHandler}
        ref={searchInputRef}
        type="text"
        placeholder="검색어를 입력하세요"
      />
      <button onClick={searchHandler}>
        <AiOutlineSearch size={20} />
      </button>
    </SearchContainer>
  );
};

export default Search;
