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
import type { EventListType, SearchOptionType } from "../types";

//일정 지난 것 불러오지 않기
//상태 관리 (리덕스)
//홈으로 이동시 상태 초기화 ?

interface PropsType {
  eventList: EventListType;
  lastDocumentId: string;
}

let isSecondRendering = false;

const HomePage = (props: PropsType) => {
  const dispatch = useAppDispatch();
  const searchOption = useAppSelector((state) => state.searchOption);
  const notificationState = useAppSelector((state) => state.notification);

  const [eventList, setEventList] = useState(props.eventList);
  const [pageOffset, setPageOffset] = useState(props.lastDocumentId);

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
        const { eventList } = await getEventList(searchOption);
        setEventList(eventList);
      } else {
        isSecondRendering = true;
      }
    };
    fetchEventList();
  }, [searchOption]);

  const getMoreDataBtnHandler = async () => {
    const { eventList: newEventList, lastDocumentId } = await getEventList(
      searchOption,
      pageOffset
    );
    if (newEventList.length === 0) return;
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
          <Button onClick={getMoreDataBtnHandler}>더 보기</Button>
        </S.MoreButtonContainer>
      ) : null}
    </>
  );
};
export default HomePage;

export const getStaticProps: GetStaticProps<{
  eventList: EventListType;
}> = async () => {
  const initialState: SearchOptionType = {
    searchValue: "",
    tags: "전부 보기",
    platforms: [],
    numOfWinner: 0,
  };
  const { eventList, lastDocumentId } = await getEventList(initialState);

  if (!eventList) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      eventList: eventList,
      lastDocumentId,
    },
  };
};
