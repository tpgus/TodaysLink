import * as S from "../components/event/style/style-EventList";
import EventList from "../components/event/EventList";
import SidebarFilter from "../components/filter/SidebarFilter";
import TagList from "../components/filter/TagList";
import Head from "next/head";
import Button from "../components/ui/Button";
import Notification from "../components/common/Notification";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { showNotification } from "../store/notificationSlice";
import { getEventList } from "../client-apis/api/event";
import { resetFilter, setTag } from "../store/searchOptionSlice";
import type { GetStaticProps } from "next";
import type { EventType, SearchOptionType } from "../types";

//일정 지난 것 불러오지 않기
//상태 관리 (리덕스)
//홈으로 이동시 상태 초기화 ?

interface PropsType {
  eventList: EventType[];
  lastDocumentId: string;
  totalLength: number;
}

let isSecondRendering = false;

const HomePage = (props: PropsType) => {
  const dispatch = useAppDispatch();
  const searchOption = useAppSelector((state) => state.searchOption);
  const notificationState = useAppSelector((state) => state.notification);

  const [eventList, setEventList] = useState(props.eventList);
  const [pageOffset, setPageOffset] = useState<string | null>(
    props.lastDocumentId
  );
  const [totalLength, setTotalLength] = useState(props.totalLength);

  const currentPage = Math.ceil(eventList.length / 4);
  const totalPage = Math.ceil(totalLength / 4);

  useEffect(() => {
    //페이지 벗어날 때 -> 다른 방법
    return () => {
      dispatch(setTag("전부 보기"));
      dispatch(resetFilter());
    };
  }, [dispatch]);

  useEffect(() => {
    //리덕스 상태 초기화 + 페이지 사전렌더링 관련
    const fetchEventList = async () => {
      if (isSecondRendering) {
        const { eventList, totalLength, lastDocumentId } = await getEventList(
          searchOption,
          null
        );
        setEventList(eventList);
        setTotalLength(totalLength);
        setPageOffset(lastDocumentId);
      } else {
        isSecondRendering = true;
      }
    };
    fetchEventList();
  }, [searchOption]);

  const getMoreDataHandler = async () => {
    if (currentPage === totalPage) {
      dispatch(
        showNotification({
          isPositive: false,
          message: "더이상 불러올 데이터가 없습니다.",
        })
      );
      return;
    }
    const { eventList: newEventList, lastDocumentId } = await getEventList(
      searchOption,
      pageOffset
    );
    setEventList([...eventList, ...newEventList]);
    setPageOffset(lastDocumentId!);
  };

  return (
    <>
      <Head>
        <title>투데이 링크</title>
        <meta
          name="description"
          content="누구나 쉽게 참여할 수 있는 다양한 추첨 이벤트 링크를 제공합니다. 다양한 이벤트에 참여하여 행운을 누려보세요!"
        />
      </Head>
      <TagList />
      <SidebarFilter />
      <EventList eventList={eventList} />
      {notificationState.isActive ? <Notification /> : null}
      {eventList.length > 0 ? (
        <S.MoreButtonContainer>
          <Button
            onClick={getMoreDataHandler}
          >{`더 보기 ${currentPage}/${totalPage}`}</Button>
        </S.MoreButtonContainer>
      ) : null}
    </>
  );
};
export default HomePage;

export const getStaticProps: GetStaticProps<{
  eventList: EventType[];
}> = async () => {
  const searchOptions: SearchOptionType = {
    searchValue: null,
    tags: "전부 보기",
    platform: null,
    numOfWinner: 0,
  };
  const { eventList, totalLength, lastDocumentId } = await getEventList(
    searchOptions,
    null
  );

  if (!eventList || !lastDocumentId) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      eventList: eventList,
      lastDocumentId,
      totalLength,
    },
  };
};
