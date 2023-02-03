import * as S from "../components/event/style/style-EventList";
import EventList from "../components/event/EventList";
import SidebarFilter from "../components/filter/SidebarFilter";
import TagList from "../components/filter/TagList";
import Head from "next/head";
import Button from "../components/ui/Button";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { eventAPI } from "../client-apis/api/event";
import { useFetch } from "../hooks/useFetch";
import { resetFilter, setTag } from "../store/searchOptionSlice";
import { eventListParser } from "../server/helpers/parser-utils";
import { getEventList } from "../server/controller/eventController";
import type { GetStaticProps } from "next";
import type { EventListType } from "../types";

//일정 지난 것 불러오지 않기
//상태 관리 (리덕스)
//홈으로 이동시 상태 초기화 ?

interface PropsType {
  eventList: EventListType;
  totalLength: number;
}

interface ResponseType {
  message: string;
  data: EventListType;
  totalLength: number;
}

let isSecondRendering = false;

const HomePage = (props: PropsType) => {
  const dispatch = useAppDispatch();
  const searchOption = useAppSelector((state) => state.searchOption);

  const [eventList, setEventList] = useState(props.eventList);
  const [pageOffset, setPageOffset] = useState(props.eventList.length);
  const [totalLength, setTotalLength] = useState(props.totalLength);

  const currentPage = Math.ceil(eventList.length / 12);
  const totalPage = Math.ceil(totalLength / 12);

  const {
    error,
    isLoading,
    data,
    requestFunction: getEventList,
    resetState,
  } = useFetch<ResponseType>(eventAPI.getEventList);

  useEffect(() => {
    return () => {
      dispatch(setTag("전부 보기"));
      dispatch(resetFilter());
    };
  }, [dispatch]);

  useEffect(() => {
    if (isSecondRendering) {
      setPageOffset(0);
      setEventList([]);
      getEventList({ pageOffset: 0, searchOption });
    } else {
      isSecondRendering = true;
    }
  }, [searchOption, getEventList]);

  const getMoreDataBtnHandler = () => {
    getEventList({ pageOffset, searchOption });
  };

  if (!isLoading && data && !error) {
    setEventList([...eventList, ...data.data]);
    setPageOffset(data.data.length);
    setTotalLength(data.totalLength);
    resetState();
  }

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
      <EventList eventList={eventList} isLoading={isLoading} />

      {eventList.length > 0 ? (
        <S.MoreButtonContainer>
          <Button
            onClick={getMoreDataBtnHandler}
            disabled={currentPage === totalPage}
          >
            {isLoading ? "로딩 중..." : `더 보기 ${currentPage}/${totalPage}`}
          </Button>
        </S.MoreButtonContainer>
      ) : null}
    </>
  );
};
export default HomePage;

export const getStaticProps: GetStaticProps<{
  eventList: EventListType;
}> = async () => {
  const { documents: dataList, totalLength } = await getEventList();

  if (!dataList) {
    return {
      notFound: true,
    };
  }

  const eventList = eventListParser(dataList);

  return {
    props: {
      eventList,
      totalLength,
    },
  };
};
