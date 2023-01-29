import * as S from "./style/style-SidebarFilter";
import { v4 as uuidv4 } from "uuid";
import { BiRefresh } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "../../store";
import { setFlatform, setNumOfWinner } from "../../store/searchOptionSlice";
import { useEffect, useRef } from "react";

const PLATFORMS = [
  { name: "인스타그램", value: "IG" },
  { name: "페이스북", value: "FB" },
  { name: "유튜브", value: "YT" },
  { name: "네이버", value: "NV" },
  { name: "앱 전용", value: "APP_ONLY" },
  { name: "공식 홈페이지", value: "OFFICIAL_WEB" },
];
const NUM_OF_WINNER = [
  { name: "100% 당첨", value: 99999999 },
  { name: "1 ~ 49명", value: 1 },
  { name: "50명 이상", value: 50 },
  { name: "100명 이상", value: 100 },
  { name: "500명 이상", value: 500 },
  { name: "1000명 이상", value: 1000 },
];

const SidebarFilter = () => {
  const dispatch = useAppDispatch();
  const radioRef = useRef<HTMLInputElement>(null);

  const handleWinnerFilter = (value: number) => {
    dispatch(setNumOfWinner(value));
  };

  return (
    <S.SidebarContainer>
      <div className="pc-only">
        <div className="filter-wrap">
          <fieldset>
            <legend>
              <span>플랫폼</span>
            </legend>
            <S.FilterContainer>
              <div>
                {PLATFORMS.map((flatform) => (
                  <S.CheckboxWrapper key={uuidv4()}>
                    <input
                      type="checkbox"
                      value={flatform.value}
                      id={flatform.name}
                    />
                    <label htmlFor={flatform.name}>{flatform.name}</label>
                  </S.CheckboxWrapper>
                ))}
              </div>
            </S.FilterContainer>
          </fieldset>
        </div>
      </div>
      <div className="pc-only">
        <div className="filter-wrap">
          <fieldset>
            <legend>
              <span>당첨자 수</span>
            </legend>
            <S.FilterContainer>
              <div>
                {NUM_OF_WINNER.map((winner) => (
                  <S.CheckboxWrapper key={uuidv4()}>
                    <input
                      type="radio"
                      value={winner.value}
                      id={winner.name}
                      name="winner"
                      onClick={() => handleWinnerFilter(winner.value)}
                    />
                    <label htmlFor={winner.name}>{winner.name}</label>
                  </S.CheckboxWrapper>
                ))}
              </div>
            </S.FilterContainer>
          </fieldset>
        </div>
      </div>
      <button onClick={() => alert("초기화 클릭")}>
        <BiRefresh size={20} />
        &nbsp; 선택 초기화
      </button>
    </S.SidebarContainer>
  );
};

export default SidebarFilter;
