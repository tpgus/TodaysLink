import * as S from "./style/style-EventDetail";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";
import { dateParser } from "../../helpers/parser-utils";
import { v4 as uuidv4 } from "uuid";
import type { EventType } from "../../types";

interface PropsType {
  event: EventType;
}

const EventDetail = (props: PropsType) => {
  const { event } = props;
  const { startDate, endDate, announcementDate } = event;
  const dates = [startDate, endDate, announcementDate];

  //추후 아래의 코드를 주석 코드로 변경 및 개선 기록
  // const [...] = dates.map((date)=>(dateParser(date));
  const [formattedStartDate, formattedEndDate, formattedAnnouncementDate] =
    dates.map((date) => dateParser(date));

  return (
    <S.EventDetailLayout>
      <S.EventDetailContainer>
        <Image
          className="img"
          src={event.image}
          width={500}
          height={500}
          alt="event-product"
        />
        <S.InfoContainer>
          <div className="info__div info__div--header">
            <div>
              <h3 className="item-title">{event.title}</h3>
              <p className="item-description">{event.description}</p>
            </div>
            <div className="actions">
              <Link className="actions__link" href={event.url} target="_blank">
                링크 바로가기
              </Link>
              <Button className="actions__btn">참여 완료</Button>
            </div>
          </div>
          <div className="info__div">
            <dl>
              <dt>응모 기간</dt>
              <dd>
                {formattedStartDate} - {formattedEndDate}
              </dd>
            </dl>
          </div>
          <div className="info__div">
            <dl>
              <dt>당첨자 발표</dt>
              <dd>{formattedAnnouncementDate}</dd>
            </dl>
          </div>
          <div className="info__div">
            <dl>
              <dt>당첨 인원</dt>
              <dd>{event.numOfWinner}</dd>
            </dl>
          </div>
          <div className="info__div">
            <dl>
              <dt>유의 사항</dt>
              <dd>
                <ul>
                  {event.warnings.map((warning) => (
                    <li key={uuidv4()}>{warning}</li>
                  ))}
                </ul>
              </dd>
            </dl>
          </div>
        </S.InfoContainer>
      </S.EventDetailContainer>
    </S.EventDetailLayout>
  );
};

export default EventDetail;
