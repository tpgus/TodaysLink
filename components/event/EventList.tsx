import * as S from "./style/style-EventList";
import Event from "./Event";
import { v4 as uuidv4 } from "uuid";
import { ImSad } from "react-icons/im";
import type { EventListType } from "../../types";

interface PropsType {
  eventList: EventListType;
}

const EventList = (props: PropsType) => {
  if (props.eventList.length === 0) {
    return (
      <S.NothingToShow>
        <ImSad size={100} />
        <p>데이터가 존재하지 않습니다.</p>
      </S.NothingToShow>
    );
  }
  return (
    <>
      <S.EventListContainer>
        <div className="grid-container">
          {props.eventList.map((event) => (
            <Event key={uuidv4()} event={event} />
          ))}
        </div>
      </S.EventListContainer>
    </>
  );
};

export default EventList;
