import * as S from "./style/style-SidebarFilter";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BiRefresh } from "react-icons/bi";
import { useAppDispatch } from "../../store";
import {
  setPlatforms,
  setNumOfWinner,
  resetFilter,
} from "../../store/searchOptionSlice";
import type { PLATFORM } from "../../types";

const PLATFORMS = [
  { name: "인스타그램", value: "INSTAGRAM" },
  { name: "페이스북", value: "FACEBOOK" },
  { name: "유튜브", value: "YOUTUBE" },
  { name: "네이버", value: "NAVER" },
  { name: "앱 전용", value: "APP_ONLY" },
  { name: "공식 홈페이지", value: "OFFICIAL_WEB" },
  { name: "기타", value: "ETC" },
];
const NUM_OF_WINNER = [
  { name: "100% 당첨", value: "99999999" },
  { name: "1~49 명", value: "1" },
  { name: "50명 이상", value: "50" },
  { name: "100명 이상", value: "100" },
  { name: "500명 이상", value: "500" },
  { name: "1000명 이상", value: "1000" },
];

const SidebarFilter = () => {
  const [checkedPlatform, setCheckedPlatform] = useState<number | null>(null);

  const [checkedNumOfWinner, setCheckedNumOfWinner] = useState<number | null>(
    null
  );

  const dispatch = useAppDispatch();

  const handlePlatformFilter = (idx: number) => {
    const platform = PLATFORMS[idx].value;
    setCheckedPlatform(idx);
    dispatch(setPlatforms(platform as PLATFORM));
  };

  const handleWinnerFilter = (idx: number) => {
    const numOfWinner = NUM_OF_WINNER[idx].value;
    setCheckedNumOfWinner(idx);
    dispatch(setNumOfWinner(Number(numOfWinner)));
  };

  const handleReset = () => {
    dispatch(resetFilter());
    setCheckedNumOfWinner(null);
    setCheckedPlatform(null);
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
                {PLATFORMS.map((platform, idx) => (
                  <S.RadioWrapper key={uuidv4()}>
                    <input
                      type="radio"
                      name="platform"
                      value={platform.value}
                      id={platform.name}
                      checked={checkedPlatform === idx}
                      onChange={() => handlePlatformFilter(idx)}
                    />
                    <label htmlFor={platform.name}>{platform.name}</label>
                  </S.RadioWrapper>
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
                {NUM_OF_WINNER.map((winner, idx) => (
                  <S.RadioWrapper key={uuidv4()}>
                    <input
                      type="radio"
                      value={winner.value}
                      id={winner.name}
                      name="winner"
                      checked={checkedNumOfWinner === idx}
                      onChange={() => handleWinnerFilter(idx)}
                    />
                    <label htmlFor={winner.name}>{winner.name}</label>
                  </S.RadioWrapper>
                ))}
              </div>
            </S.FilterContainer>
          </fieldset>
        </div>
      </div>
      <button onClick={handleReset}>
        <BiRefresh size={20} />
        &nbsp; 선택 초기화
      </button>
    </S.SidebarContainer>
  );
};

export default SidebarFilter;
