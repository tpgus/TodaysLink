import React from "react";
import { v4 as uuidv4 } from "uuid";
import {
  SidebarContainer,
  FilterContainer,
  CheckboxWrapper,
} from "./style/style-SidebarFilter";
import { BiRefresh } from "react-icons/bi";

const PLATFORMS = [
  { name: "인스타그램", id: "IG" },
  { name: "페이스북", id: "FB" },
  { name: "유튜브", id: "YT" },
  { name: "네이버", id: "NV" },
  { name: "앱 전용", id: "APP_ONLY" },
  { name: "공식 홈페이지", id: "OFFICIAL_WEB" },
];
const NUM_OF_WINNER = [
  { name: "100% 당첨", value: 9999999 },
  { name: "1 ~ 49명", value: 1 },
  { name: "50명 이상", value: 50 },
  { name: "100명 이상", value: 100 },
  { name: "500명 이상", value: 500 },
  { name: "1000명 이상", value: 1000 },
];

const SidebarFilter = () => {
  return (
    <SidebarContainer>
      <div className="pc-tablet-only">
        <form>
          <div>
            <fieldset>
              <legend>
                <span>플랫폼</span>
              </legend>
              <FilterContainer>
                <div>
                  {PLATFORMS.map((flatform) => (
                    <CheckboxWrapper key={uuidv4()}>
                      <input
                        type="checkbox"
                        value={flatform.name}
                        id={flatform.id}
                      />
                      <label htmlFor={flatform.id}>{flatform.name}</label>
                    </CheckboxWrapper>
                  ))}
                </div>
              </FilterContainer>
            </fieldset>
          </div>
        </form>
      </div>
      <div className="pc-tablet-only">
        <form>
          <div>
            <fieldset>
              <legend>
                <span>당첨자 수</span>
              </legend>
              <FilterContainer>
                <div>
                  {NUM_OF_WINNER.map((winner) => (
                    <CheckboxWrapper key={uuidv4()}>
                      <input
                        type="checkbox"
                        value={winner.value}
                        id={winner.name}
                      />
                      <label htmlFor={winner.name}>{winner.name}</label>
                    </CheckboxWrapper>
                  ))}
                </div>
              </FilterContainer>
            </fieldset>
          </div>
        </form>
      </div>
      <button onClick={() => alert("초기화 클릭")}>
        <BiRefresh size={20} />
        &nbsp; 선택 초기화
      </button>
    </SidebarContainer>
  );
};

export default SidebarFilter;
