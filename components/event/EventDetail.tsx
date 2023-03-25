import * as S from "./style/style-EventDetail";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import DetailTagList from "./DetailTagList";
import Notification from "../common/Notification";
import { v4 as uuidv4 } from "uuid";
import { useSession } from "next-auth/react";
import { showNotification } from "../../store/notificationSlice";
import { addMyEventHistory } from "../../client-apis/api/event";
import { dateParser, separateLine } from "../../utils/parser-utils";
import { useAppDispatch, useAppSelector } from "../../store";
import type { EventType } from "../../types";

interface PropsType {
  event: EventType;
}

const EventDetail = (props: PropsType) => {
  const { event } = props;
  const { startDate, endDate, announcementDate } = event;
  const dates = [startDate, endDate, announcementDate];

  const { data: session, status } = useSession();
  console.log(session);
  const dispatch = useAppDispatch();
  const notificationState = useAppSelector((state) => state.notification);

  const [formattedStartDate, formattedEndDate, formattedAnnouncementDate] =
    dates.map((date) => {
      const { year, month, day, hour, minites } = date;
      const dateType = new Date(year, month - 1, day, hour, minites);
      return dateParser(dateType);
    });
  const content = separateLine(event.content);

  const handleClickCompleteBtn = async () => {
    if (status === "authenticated" && session) {
      //로그인 유저
      const result = await addMyEventHistory(session, event);
      if (result.success) {
        dispatch(
          showNotification({
            isPositive: true,
            message: result.message,
          })
        );
      } else {
        dispatch(
          showNotification({
            isPositive: false,
            message: result.message,
          })
        );
      }
    } else if (status === "unauthenticated" || !session) {
      //비로그인 유저
      alert("로그인이 필요합니다.");
      return;
    }
  };

  return (
    <S.EventDetailLayout>
      {notificationState.isActive ? <Notification /> : null}
      <S.EventDetailContainer>
        <S.ImageTagContainer>
          <Image
            className="img"
            src={event.image}
            width={400}
            height={400}
            alt="event-platform"
            priority
          />
          <DetailTagList tags={event.tags} />
        </S.ImageTagContainer>
        <S.InfoContainer>
          <div className="info__div info__div--header">
            <div>
              <h3 className="item-title">{event.title}</h3>
              <p className="item-subTitle">{event.subTitle}</p>
            </div>
            <div className="actions">
              <Link className="actions__link" href={event.url} target="_blank">
                링크 바로가기
              </Link>
              <Button onClick={handleClickCompleteBtn} className="actions__btn">
                참여 완료
              </Button>
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
              <dt>당첨 인원 및 상품</dt>
              <ul>
                {event.prize.map((prize) => (
                  <li key={uuidv4()}>
                    <dd>{prize}</dd>
                  </li>
                ))}
              </ul>
            </dl>
          </div>
          <div className="info__div">
            <dl>
              <dt>이벤트 내용</dt>
              <dd className="content">
                {content.map((line) => (
                  <p key={uuidv4()}>{line ? line : null}&nbsp;</p>
                ))}
              </dd>
            </dl>
          </div>
          <div className="info__div">
            <dl>
              <dt>유의 사항</dt>
              <dd>
                {event.warnings.length > 0 ? (
                  <ul>
                    {event.warnings.map((warning) => (
                      <li key={uuidv4()}>{warning}</li>
                    ))}
                  </ul>
                ) : (
                  "자세한 사항은 해당 링크를 통해 확인해 주세요"
                )}
              </dd>
            </dl>
          </div>
        </S.InfoContainer>
      </S.EventDetailContainer>
    </S.EventDetailLayout>
  );
};

export default EventDetail;
