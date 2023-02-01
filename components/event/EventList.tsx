import * as S from "./style/style-EventList";
import Event from "./Event";
import { v4 as uuidv4 } from "uuid";
import type { EventListType } from "../../types";

interface PropsType {
  eventList: EventListType;
}

const EventList = (props: PropsType) => {
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
