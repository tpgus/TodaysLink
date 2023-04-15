import * as S from "./style/style-SidebarFilter";
import { useState } from "react";
import { BiRefresh } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";
import type { PlatformType } from "../../types";
import type { Dispatch, SetStateAction } from "react";

const PLATFORMS = [
  { name: "카카오톡", value: "KAKAO" },
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

// const FILTERS = [
//   { key: "platform", KWord: "플랫폼", option: PLATFORMS },
//   { key: "numOfWinner", KWord: "당첨자 수", option: NUM_OF_WINNER },
// ];

interface PropsType {
  currentPlatform: PlatformType;
  currentNumOfWinner: number;
  onChangePlatform: Dispatch<SetStateAction<PlatformType>>;
  onChangeNumOfWinner: Dispatch<SetStateAction<number>>;
}

//둘 다 라디오에 같은 값 -> map 이용 코드 개선 -> 개선할 때 오류 다수 발생
const SidebarFilter = (props: PropsType) => {
  const [checkedPlatform, setCheckedPlatform] = useState<number | null>(null);
  const [checkedNumOfWinner, setCheckedNumOfWinner] = useState<number | null>(
    null
  );

  const handlePlatformFilter = (idx: number) => {
    setCheckedPlatform(idx);
    const platform = PLATFORMS[idx].value;
    props.onChangePlatform(platform as PlatformType);
  };

  const handleWinnerFilter = (idx: number) => {
    setCheckedNumOfWinner(idx);
    const numOfWinner = NUM_OF_WINNER[idx].value;
    props.onChangeNumOfWinner(Number(numOfWinner));
  };

  const handleResetNumOfWinenr = () => {
    props.onChangeNumOfWinner(0);
    setCheckedNumOfWinner(null);
  };

  const handleResetPlatform = () => {
    props.onChangePlatform(null);
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
          <button onClick={handleResetPlatform} className="reset__btn">
            <BiRefresh size={20} />
            &nbsp; 선택 초기화
          </button>
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
          <button onClick={handleResetNumOfWinenr} className="reset__btn">
            <BiRefresh size={20} />
            &nbsp; 선택 초기화
          </button>
        </div>
      </div>
    </S.SidebarContainer>
  );
};

export default SidebarFilter;
