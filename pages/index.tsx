import EventList from "../components/event/EventList";
import SidebarFilter from "../components/left-sidebar/SidebarFilter";
import TagList from "../components/tags/TagList";
import Head from "next/head";
import Button from "../components/ui/Button";
import { useAppSelector } from "../store";
import { eventAPI } from "../client-apis/api/event";
import { useFetch } from "../hooks/useFetch";
import { useCallback, useEffect, useState } from "react";
import { eventListParser } from "../helpers/parser-util";
import {
  connectDB,
  getLimitedData,
  getCountOfDocuments,
} from "../helpers/db-util";
import type { GetStaticProps } from "next";
import type { MongoClient } from "mongodb";
import type { EventListType } from "../types/commonType";

interface PropsType {
  eventList: EventListType;
  pageOffset: number;
  countOfDocuments: number;
}
const HomePage = (props: PropsType) => {
  const searchOption = useAppSelector((state) => state.searchOption);
  const [pageOffset, setPageOffset] = useState(props.pageOffset);
  const [eventList, setEventList] = useState(props.eventList);
  const totalDataLength = props.countOfDocuments;
  const {
    error,
    isLoading,
    data,
    requestFunction: getEventList,
    resetState,
  } = useFetch<EventListType>(eventAPI.getEventList);

  const fetchEventList = useCallback(() => {
    getEventList({ pageOffset, searchOption });
    setPageOffset((prevOffset) => prevOffset + 12);
  }, [getEventList, pageOffset, searchOption]);

  const getMoreDataBtnHandler = () => {
    console.log("더보기 클릭");
    fetchEventList();
  };

  if (!isLoading && data && !error) {
    console.log(data);
    setEventList([...eventList, ...data]);
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
      <EventList
        eventList={eventList}
        pageOffset={pageOffset}
        pageCount={totalDataLength}
      />
      <div className="center">
        <Button onClick={getMoreDataBtnHandler}>
          {isLoading ? "로딩 중..." : "더 보기"}
        </Button>
      </div>
    </>
  );
};
export default HomePage;

export const getStaticProps: GetStaticProps<{
  eventList: EventListType;
}> = async () => {
  let client: MongoClient | null = null;

  try {
    client = await connectDB();
  } catch (error) {
    console.log(error);
  }

  const dataList = await getLimitedData(client!, "event", {
    limit: 4,
    skip: 0,
  });

  if (!dataList) {
    return {
      notFound: true,
    };
  }

  const eventList = eventListParser(dataList);

  const countOfDocuments = await getCountOfDocuments({
    client: client!,
    collection: "event",
  });

  return {
    props: {
      eventList,
      pageOffset: 4,
      countOfDocuments,
    },
  };
};
