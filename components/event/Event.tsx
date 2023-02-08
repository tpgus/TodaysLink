import * as S from "./style/style-Event";
import Image from "next/image";
import { dateParser } from "../../helpers/parser-utils";
import { useState } from "react";
import { useRouter } from "next/router";
import type { EventType } from "../../types";

interface PropsType {
  event: EventType;
}

const Event = ({ event }: PropsType) => {
  const router = useRouter();
  const [isHover, setIsHover] = useState(false);

  const parsedEndDate = dateParser(event.endDate);

  return (
    <>
      <S.EventContainer
        isHover={isHover}
        onClick={() => router.push(`/detail/${event.id}`)}
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
      >
        <div className="img-wrap">
          <Image
            src={event.image}
            alt="preview-image"
            width={240}
            height={300}
            priority
          ></Image>
          {isHover ? (
            <span className="pc-tablet-only detail__span">자세히 보기</span>
          ) : null}
        </div>
        <div className="info-wrap">
          <h3 className="info-title">{event.title}</h3>
          <br />
          <p className="info-description">{event.description}</p>
          <div className="sub-info">
            <span className="sub-info__span">
              <span className="end-time"> ~ </span>
              {parsedEndDate}까지
            </span>
          </div>
        </div>
      </S.EventContainer>
    </>
  );
};

export default Event;
