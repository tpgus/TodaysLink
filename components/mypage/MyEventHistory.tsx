import * as S from "./style/style-MyEventHistory";
import Pagination from "../common/Pagination";
import { useSession } from "next-auth/react";
import { dateParser } from "../../utils/parser-utils";
import { v4 as uuidv4 } from "uuid";
import { getMyEventHistory } from "../../client-apis/api/event";
import { useEffect, useState } from "react";
import type { MyEventType, EventDate } from "../../types";

type FetchStatus = "pending" | "complete" | "loading";

const getDateFormat = (date: EventDate) => {
  const { year, month, day, hour, minites } = date;
  return dateParser(new Date(year, month - 1, day, hour, minites));
};

const getFeedbackMessage = (message: string) => (
  <tbody>
    <tr>
      <td className="center">{message}</td>
    </tr>
  </tbody>
);

const itemsPerPage = 12;

//컴포넌트 시작
const MyEventHistory = () => {
  const { data: session } = useSession();
  const [fetchStatus, setFetchStatus] = useState<FetchStatus>("pending");
  const [myEvent, setMyEvent] = useState<MyEventType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const firstItemIdxOfPage = (currentPage - 1) * itemsPerPage;

  const handleClickEventItem = (url: string) => {
    window.open(url, "_blank");
  };

  useEffect(() => {
    const fetchMyEventHistory = async () => {
      const myEvent = await getMyEventHistory(session!);
      setMyEvent(myEvent);
      setFetchStatus("complete");
    };
    setFetchStatus("loading");
    fetchMyEventHistory();
  }, [session]);

  return (
    <S.MyEventHistoryLayout>
      <h2>내가 참여한 이벤트</h2>
      <S.MyEventHistoryContainer>
        <table>
          <thead>
            <tr>
              <th className="th-title">이벤트 제목</th>
              <th className="th-participation-date pc-tablet-only">
                참여 일자
              </th>
              <th className="th-announcement-date">당첨자 발표일</th>
            </tr>
          </thead>
          {fetchStatus === "loading" ? getFeedbackMessage("로딩 중...") : null}
          {fetchStatus === "complete" && myEvent.length === 0
            ? getFeedbackMessage("참여한 이벤트가 존재하지 않습니다.")
            : null}
          {myEvent
            .slice(firstItemIdxOfPage, firstItemIdxOfPage + itemsPerPage)
            .map((event) => (
              <tbody
                onClick={() => handleClickEventItem(event.url)}
                key={uuidv4()}
              >
                <tr className="tb-row">
                  <td className="td-title">{event.title}</td>
                  <td className="td-participation-date pc-tablet-only">
                    {dateParser(event.participationDate.toDate())}
                  </td>
                  <td className="td-announcement-date">
                    {getDateFormat(event.announcementDate)}
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      </S.MyEventHistoryContainer>
      <Pagination
        lengthOfItems={myEvent.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onChangePage={setCurrentPage}
      />
    </S.MyEventHistoryLayout>
  );
};

export default MyEventHistory;
