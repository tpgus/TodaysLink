import * as S from "./style/style-Search";
import Joi from "joi";
import { AiOutlineSearch } from "react-icons/ai";
import { validate } from "../../utils/checkValidation-utils";
import { useRef, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store";
import { showNotification } from "../../store/notificationSlice";
import { setSearchValue } from "../../store/searchOptionSlice";

const Search = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const { searchValue } = useAppSelector((state) => state.searchOption);

  const search = async () => {
    // 실제 검색 요청과 관련된 코드
    const value = searchInputRef.current!.value;
    const validationSchema = Joi.object({
      value: Joi.string().min(2).max(10).label("검색어"),
    });

    const validationResult = await validate(validationSchema, {
      value,
    });

    if (validationResult.errorMessage) {
      dispatch(
        showNotification({
          isPositive: false,
          message: validationResult.errorMessage,
        })
      );
      return;
    }

    dispatch(setSearchValue(value));
    alert("개발 중입니다...");
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
