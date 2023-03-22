import * as S from "./style/style-MyEventHistory";
import Pagination from "../common/Pagination";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { dateParser } from "../../utils/parser-utils";
import { v4 as uuidv4 } from "uuid";
import { getMyEventHistory } from "../../client-apis/api/event";
import { useEffect, useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import type { MyEventType, EventDate } from "../../types";

type FetchStatus = "pending" | "complete" | "loading";

const getDateFormat = (date: EventDate) => {
  const { year, month, day } = date;
  return dateParser(new Date(year, month - 1, day));
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
  const router = useRouter();
  const { data: session } = useSession();
  const [user, setUser] = useState(session);
  const [isDescOrder, setIsDescOrder] = useState(false);
  const [fetchStatus, setFetchStatus] = useState<FetchStatus>("pending");
  const [myEvent, setMyEvent] = useState<MyEventType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const firstItemIdxOfPage = (currentPage - 1) * itemsPerPage;

  useEffect(() => {
    const fetchMyEventHistory = async () => {
      const myEvent = await getMyEventHistory(user!);
      setMyEvent(myEvent);
      setFetchStatus("complete");
    };
    if (user) {
      setFetchStatus("loading");
      fetchMyEventHistory();
    } else {
      router.replace("/auth/signIn");
    }
  }, [user, router]);

  useEffect(() => {
    if (!session) {
      setUser(null);
    }
  }, [session]);

  const handleClickEventItem = (url: string) => {
    window.open(url, "_blank");
  };

  const handleSetOrder = () => {
    setMyEvent((prevState) => prevState.reverse());
    setIsDescOrder((prevState) => !prevState);
  };

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
              <th className="th-announcement-date">
                당첨자 발표일&nbsp;
                <button onClick={handleSetOrder} className="order__btn">
                  {isDescOrder ? "내림차순" : "오름차순"}
                  {isDescOrder ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
                </button>
              </th>
            </tr>
          </thead>
          {fetchStatus === "loading" ? getFeedbackMessage("로딩 중...") : null}
          {fetchStatus === "complete" && myEvent.length === 0
            ? getFeedbackMessage("참여한 이벤트가 존재하지 않습니다.")
            : myEvent
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
