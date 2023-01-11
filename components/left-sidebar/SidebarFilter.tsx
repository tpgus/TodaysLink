import React from "react";
import {
  SidebarContainer,
  FilterContainer,
  Checkbox,
} from "./style/style-SidebarFilter";
import { BiRefresh } from "react-icons/bi";

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
                  <Checkbox onClick={() => alert("클릭")}>
                    <input type="checkbox" value="인스타그램" />
                    <label>인스타그램</label>
                  </Checkbox>
                  <Checkbox>
                    <input type="checkbox" value="페이스북" />
                    <label>페이스북</label>
                  </Checkbox>
                  <Checkbox>
                    <input type="checkbox" value="유튜브" />
                    <label>유튜브</label>
                  </Checkbox>
                  <Checkbox>
                    <input type="checkbox" value="네이버" />
                    <label>네이버</label>
                  </Checkbox>
                  <Checkbox>
                    <input type="checkbox" value="앱 전용" />
                    <label>앱 전용</label>
                  </Checkbox>
                  <Checkbox>
                    <input type="checkbox" value="공식 홈페이지" />
                    <label>공식 홈페이지</label>
                  </Checkbox>
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
                  <Checkbox>
                    <input type="checkbox" value="공식 홈페이지" />
                    <label>100% 당첨</label>
                  </Checkbox>
                  <Checkbox>
                    <input type="checkbox" value="인스타그램" />
                    <label>1 ~ 49명</label>
                  </Checkbox>
                  <Checkbox>
                    <input type="checkbox" value="페이스북" />
                    <label>50명 이상</label>
                  </Checkbox>
                  <Checkbox>
                    <input type="checkbox" value="유튜브" />
                    <label>100명 이상</label>
                  </Checkbox>
                  <Checkbox>
                    <input type="checkbox" value="네이버" />
                    <label>500명 이상</label>
                  </Checkbox>
                  <Checkbox>
                    <input type="checkbox" value="앱 전용" />
                    <label>1000명 이상</label>
                  </Checkbox>
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
