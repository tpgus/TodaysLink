import * as S from "./style/style-EventList";
import Event from "./Event";
import Button from "../ui/Button";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../store";
import type { EventListType } from "../../types/commonType";

interface PropsType {
  eventList: EventListType;
  pageOffset: number;
  pageCount: number;
}

const EventList = (props: PropsType) => {
  const currentPage = Math.ceil(props.eventList.length / 12);
  const totalPage = Math.ceil(props.pageCount / 12);

  return (
    <>
      <S.EventListContainer>
        <div className="grid-container">
          {props.eventList.map((event) => (
            <Event key={uuidv4()} event={event} />
          ))}
        </div>
      </S.EventListContainer>
      {/* <S.MoreButtonContainer>
        <Button
          onClick={handleClickMoreBtn}
          disable={currentPage === totalPage}
        >
          더 보기&nbsp;
          <span>{`${currentPage}/${totalPage}`}</span>
        </Button>
      </S.MoreButtonContainer> */}
    </>
  );
};

export default EventList;
