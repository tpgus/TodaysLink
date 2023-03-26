import Head from "next/head";
import EventDetail from "../../components/event/EventDetail";
import { useState } from "react";
import { authOptions } from "../api/auth/[...nextauth]";
import { getEventById } from "../../client-apis/api/event";
import { getServerSession } from "next-auth";
import { checkIsParticipatedEvent } from "../../client-apis/api/event";
import type { EventType } from "../../types";
import type { ParsedUrlQuery } from "querystring";
import type { GetServerSideProps } from "next";

interface PropsType {
  event: EventType;
  isParticipated: boolean;
  hasError: boolean;
}

const EventDetailPage = (props: PropsType) => {
  const [event, setEvent] = useState(props.event);

  //true일 경우 폴백체크 필요 : 현재 유효하지 않은 값일 경우 모두 loading으로 처리 됨
  // if (!event) {
  //   return <p>로딩 중...</p>;
  // }

  return (
    <>
      <Head>
        <title>{event ? event.title : "투데이 링크"}</title>
        <meta
          name="description"
          content={
            event
              ? `${event.title} - ${event.subTitle}`
              : "투데이 링크 이벤트 상세 페이지"
          }
        />
      </Head>
      <EventDetail event={event} isParticipated={props.isParticipated} />
    </>
  );
};

interface Params extends ParsedUrlQuery {
  eventId: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { eventId } = context.params as Params;
  const session = await getServerSession(context.req, context.res, authOptions);
  const event = await getEventById(eventId);

  if (!session) {
    //로그인 하지 않은 유저일 경우,
    return {
      props: {
        event,
        isParticipated: false,
      },
    };
  }

  //로그인한 유저일 경우,
  const isParticipated = await checkIsParticipatedEvent(session, eventId);
  return {
    props: {
      event,
      isParticipated,
    },
  };
};

//댓글 같은 기능이 있다면 serverSideProps가 적합할 수도
//만약, getStaticProps를 이용하면, 나중에 데이터가 추가될 수 있으니 revalidate를 이용
//현재는 정적 생성 : 빌드 시점 + AND revalidate 이용 가능
// export const getStaticProps: GetStaticProps = async (context) => {
//   const { eventId } = context.params as Params;
//   const event = await getEventById(eventId);

//   if (!event) {
//     //fallback:true이지만(=주어진 경로값 이외에 여러 경로값의 입력을 허용하지만), 해당 경로 값에 대한 데이터를 찾지 못한 경우
//     //또는 props : {hasError:true}를 전달하여 컴포넌트 코드에서 처리
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { event },
//   };
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   //방문 확률이 높은, 첫 페이지에서 보이는 8개의 게시물에 대한 ID를 가져온다.
//   const ids = await getEventIds();
//   const params = ids.map((id) => ({ params: { eventId: id } }));

//   return {
//     paths: params,
//     fallback: true,
//     //true일 경우 컴포넌트 코드에서 폴백체크
//   };
// };

export default EventDetailPage;
