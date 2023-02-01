import EventDetail from "../../components/event/EventDetail";
import Head from "next/head";
import { eventListParser } from "../../server/helpers/parser-utils";
import {
  getEventIds,
  getEventById,
} from "../../server/controller/eventController";
import type { EventType } from "../../types";
import type { ParsedUrlQuery } from "querystring";
import type { GetStaticPaths, GetStaticProps } from "next";

interface PropsType {
  event: EventType;
}

const EventDetailPage = (props: PropsType) => {
  const { event } = props;

  //true일 경우 폴백체크 필요 : 현재 유효하지 않은 값일 경우 모두 loading으로 처리 됨
  if (!event) {
    return <p>loading...</p>;
  }

  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta
          name="description"
          content={`${event.title} - ${event.description}`}
        />
      </Head>
      <EventDetail event={event} />
    </>
  );
};

interface Params extends ParsedUrlQuery {
  eventId: string;
}

//첫 페이지의 링크 아이템을 정적 생성? 아니면 동적 생성?해야 하는 것인가
//121번 강의에서 이런 데이터는 staticProps 이용했음.
//댓글 같은 기능이 있다면 serverSideProps가 적합했을 듯
//만약, getStaticProps를 이용하면, 나중에 데이터가 추가될 수 있으니 revalidate를 이용
//현재는 정적 생성 : 빌드 시점 + AND revalidate 이용 가능
export const getStaticProps: GetStaticProps = async (context) => {
  const { eventId } = context.params as Params;
  const rawEvent = await getEventById(eventId);
  const event = eventListParser(rawEvent)[0];

  if (!event) {
    //fallback:true이지만(=주어진 경로값 이외에 여러 경로값의 입력을 허용하지만), 해당 경로 값에 대한 데이터를 찾지 못한 경우
    //또는 props : {hasError:true}를 전달하여 컴포넌트 코드에서 처리
    return {
      notFound: true,
    };
  }

  return {
    props: { event },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const rawIds = await getEventIds();
  const ids = rawIds.map((rawId) => rawId._id);
  const params = ids.map((id) => ({ params: { eventId: id.toString() } }));

  return {
    paths: params,
    fallback: true,
    //true일 경우 컴포넌트 코드에서 폴백체크
  };
};

export default EventDetailPage;
