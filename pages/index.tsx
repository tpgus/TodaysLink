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
import type { GetStaticProps } from "next";
import type {
  EventType,
  PlatformType,
  SearchOptionType,
  TagType,
} from "../types";

interface PropsType {
  eventList: EventType[];
  lastDocumentId: string;
  totalLength: number;
}

let isFirstRendering = true;

const HomePage = (props: PropsType) => {
  const dispatch = useAppDispatch();

  const [currentTag, setCurrentTag] = useState<TagType>("전부 보기");
  const [currentPlatform, setCurrentPlatform] = useState<PlatformType>(null);
  const [currentNumOfWinner, setCurrentNumOfWinner] = useState(0);

  const notificationState = useAppSelector((state) => state.notification);

  const [eventList, setEventList] = useState(props.eventList);
  const [pageOffset, setPageOffset] = useState<string | null>(
    props.lastDocumentId
  );
  const [totalLength, setTotalLength] = useState(props.totalLength);

  const currentPage = Math.ceil(eventList.length / 8);
  const totalPage = Math.ceil(totalLength / 8);

  useEffect(() => {
    //페이지 벗어날 때 혹은 router 이벤트 이용
    return () => {
      setCurrentTag("전부 보기");
      setCurrentPlatform(null);
      setCurrentNumOfWinner(0);
    };
  }, [dispatch]);

  useEffect(() => {
    const fetchEventList = async () => {
      const { eventList, totalLength, lastDocumentId } = await getEventList(
        {
          tags: currentTag,
          platform: currentPlatform,
          numOfWinner: currentNumOfWinner,
        },
        null
      );
      setEventList(eventList);
      setTotalLength(totalLength);
      setPageOffset(lastDocumentId);
    };

    if (isFirstRendering) {
      isFirstRendering = false;
    } else {
      fetchEventList();
    }
  }, [currentTag, currentNumOfWinner, currentPlatform]);

  const handleGetMoreData = async () => {
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
      {
        tags: currentTag,
        platform: currentPlatform,
        numOfWinner: currentNumOfWinner,
      },
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
      <TagList currentTag={currentTag} onChangeTag={setCurrentTag} />
      <SidebarFilter
        currentNumOfWinner={currentNumOfWinner}
        currentPlatform={currentPlatform}
        onChangeNumOfWinner={setCurrentNumOfWinner}
        onChangePlatform={setCurrentPlatform}
      />
      {notificationState.isActive ? <Notification /> : null}
      <EventList eventList={eventList} />
      {eventList.length > 0 ? (
        <S.MoreButtonContainer>
          <Button
            onClick={handleGetMoreData}
          >{`더 보기 ${currentPage}/${totalPage}`}</Button>
        </S.MoreButtonContainer>
      ) : null}
    </>
  );
};

export const getStaticProps: GetStaticProps<{
  eventList: EventType[];
}> = async () => {
  const searchOptions: SearchOptionType = {
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
    revalidate: 3600,
  };
};

export default HomePage;
