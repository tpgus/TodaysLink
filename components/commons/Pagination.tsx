import { v4 as uuidv4 } from "uuid";
import * as S from "./style/style-Pagination";
import type { Dispatch, SetStateAction } from "react";

interface PropsType {
  lengthOfItems: number;
  itemsPerPage: number;
  currentPage: number;
  onChangePage: Dispatch<SetStateAction<number>>;
}

const Pagination = (props: PropsType) => {
  const numOfPages = Math.ceil(props.lengthOfItems / props.itemsPerPage);
  const tempArrayForBtns = new Array(numOfPages).fill(null);
  const totalButtons = tempArrayForBtns.map((_, idx) => idx + 1);
  console.log(props.currentPage);

  return (
    <S.ButtonContainer>
      {totalButtons.map((pageNumber) => (
        <li key={uuidv4()}>
          <S.Button
            className={pageNumber === props.currentPage ? "active" : ""}
            onClick={() => props.onChangePage(pageNumber)}
          >
            {pageNumber}
          </S.Button>
        </li>
      ))}
    </S.ButtonContainer>
  );
};

export default Pagination;
