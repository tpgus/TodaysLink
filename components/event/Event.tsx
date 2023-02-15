import * as S from "./style/style-Event";
import Image from "next/image";
import { dateParser } from "../../utils/parser-utils";
import { useState } from "react";
import { useRouter } from "next/router";
import type { EventType } from "../../types";

interface PropsType {
  event: EventType;
}

const Event = ({ event }: PropsType) => {
  const router = useRouter();
  const [isHover, setIsHover] = useState(false);

  const { year, month, day, hour, minites } = event.endDate;
  const date = new Date(year, month - 1, day, hour, minites);
  const parsedEndDate = dateParser(date);

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
            width={300}
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
          <p className="info-description">{event.subTitle}</p>
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
