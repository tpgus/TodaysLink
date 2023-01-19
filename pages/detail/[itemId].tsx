import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import LinkItemDetail from "../../components/link/LinkItemDetail";

const dummyData = [
  {
    id: "1",
    title: "나이키 덩크 로우",
    description: "(W) 나이키 덩크 로우 샌드드리프트 메탈릭 골드",
    startDate: "2023-01-02",
    endDate: "2023-1-27",
    announcementDate: "2023-01-28",
    image: "/images/test1.webp",
    tags: "[]",
    link: "https://kream.co.kr/exhibitions/696",
    warnings: [
      "본 이벤트는 KREAM 전 회원을 대상으로 진행됩니다",
      "본 상품은 KREAM 앱에서만 구매 가능합니다.",
      "오후 12시 오픈되는 상품은 각각 ID당 1개씩만 구매 가능합니다.",
      "선착순 한정 수량 소진 시 종료되며, 선착순 구매 시 재고 부족으로 임의로 결제 취소될 수 있습니다.",
      "본 이벤트는 KREAM 전 회원을 대상으로 진행됩니다",
      "본 상품은 KREAM 앱에서만 구매 가능합니다.",
      "오후 12시 오픈되는 상품은 각각 ID당 1개씩만 구매 가능합니다.",
      "선착순 한정 수량 소진 시 종료되며, 선착순 구매 시 재고 부족으로 임의로 결제 취소될 수 있습니다.",
      "부당한 방법으로 구매한 고객의 경우 구매 취소 및 추후 이벤트 응모 시 불이익을 받을 수 있습니다.",
      "본 이벤트는 KREAM 전 회원을 대상으로 진행됩니다",
      "본 상품은 KREAM 앱에서만 구매 가능합니다.",
      "오후 12시 오픈되는 상품은 각각 ID당 1개씩만 구매 가능합니다.",
      "선착순 한정 수량 소진 시 종료되며, 선착순 구매 시 재고 부족으로 임의로 결제 취소될 수 있습니다.",
      "부당한 방법으로 구매한 고객의 경우 구매 취소 및 추후 이벤트 응모 시 불이익을 받을 수 있습니다.",
      "본 이벤트는 KREAM 전 회원을 대상으로 진행됩니다",
      "본 상품은 KREAM 앱에서만 구매 가능합니다.",
      "오후 12시 오픈되는 상품은 각각 ID당 1개씩만 구매 가능합니다.",
      "선착순 한정 수량 소진 시 종료되며, 선착순 구매 시 재고 부족으로 임의로 결제 취소될 수 있습니다.",
      "본 이벤트는 KREAM 전 회원을 대상으로 진행됩니다",
      "본 상품은 KREAM 앱에서만 구매 가능합니다.",
      "오후 12시 오픈되는 상품은 각각 ID당 1개씩만 구매 가능합니다.",
      "선착순 한정 수량 소진 시 종료되며, 선착순 구매 시 재고 부족으로 임의로 결제 취소될 수 있습니다.",
      "부당한 방법으로 구매한 고객의 경우 구매 취소 및 추후 이벤트 응모 시 불이익을 받을 수 있습니다.",
      "본 이벤트는 KREAM 전 회원을 대상으로 진행됩니다",
      "본 상품은 KREAM 앱에서만 구매 가능합니다.",
      "오후 12시 오픈되는 상품은 각각 ID당 1개씩만 구매 가능합니다.",
      "선착순 한정 수량 소진 시 종료되며, 선착순 구매 시 재고 부족으로 임의로 결제 취소될 수 있습니다.",
      "부당한 방법으로 구매한 고객의 경우 구매 취소 및 추후 이벤트 응모 시 불이익을 받을 수 있습니다.",
      "본 이벤트는 KREAM 전 회원을 대상으로 진행됩니다",
      "본 상품은 KREAM 앱에서만 구매 가능합니다.",
      "오후 12시 오픈되는 상품은 각각 ID당 1개씩만 구매 가능합니다.",
      "선착순 한정 수량 소진 시 종료되며, 선착순 구매 시 재고 부족으로 임의로 결제 취소될 수 있습니다.",
      "본 이벤트는 KREAM소진 시 종료되며, 선착순 구매 시 재고 부족으로 임의로 결제 취소될 수 있습니다.",
      "부당한 방법으로 구매한 고객의 경우 구매 취소 및 추후 이벤트 응모 시 불이익을 받을 수 있습니다.",
    ],
    numOfWinner: "8",
  },
  {
    id: "2",
    title: "The North Face Nuptse Jackets",
    description: "아이앱 스튜디오 피그먼트 스웨트셔츠 & 미니백",
    startDate: "2023-01-02",
    endDate: "2023-1-27",
    announcementDate: "2023-01-28",
    image: "/images/test2.webp",
    tags: "[]",
    link: "https://kream.co.kr/exhibitions/696",
    warnings:
      "[본 이벤트는 KREAM 1월 신규회원 대상 앱 전용 이벤트입니다. (23년 1월 1일 이후 가입 회원 대상),본인 인증을 한 회원만 응모 가능합니다.,사이즈는 랜덤으로 지급되며, 교환 및 환불이 불가능합니다.,당첨자에 한하여 개별 메시지를 발송 드리며, 미당첨자에게는 별도의 연락을 드리지 않습니다.]",
    numOfwinner: "3",
  },
];

interface PropsType {
  item: {
    id: string;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    numOfWinner: string;
    announcementDate: Date;
    image: string;
    tags: string[];
    warnings: string[];
    link: string;
  };
}

const ItemDetailPage = (props: PropsType) => {
  //true일 경우 폴백체크 필요
  return <LinkItemDetail item={props.item} />;
};

export default ItemDetailPage;

interface Params extends ParsedUrlQuery {
  itemId: string;
}

//첫 페이지의 링크 아이템을 정적 생성? 아니면 동적 생성?해야 하는 것인가
//만약, getStaticProps를 이용하면, 나중에 데이터가 추가될 수 있으니 revalidate를 이용
//현재는 정적 생성 : 빌드 시점 + AND revalidate 이용 가능
export const getStaticProps: GetStaticProps = async (context) => {
  const { itemId } = context.params as Params;
  const linkItem = dummyData.filter((data) => data.id === itemId);

  if (!linkItem) {
    //fallback:true이지만(=주어진 경로값 이외에 여러 경로값의 입력을 허용하지만), 해당 경로 값에 대한 데이터를 찾지 못한 경우
    //404 페이지가 보여진다.
    return {
      notFound: true,
    };
  }

  return {
    props: { item: linkItem[0] },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{ params: { itemId: "1" } }],
    fallback: false,
    //true일 경우 컴포넌트 코드에서 폴백체크 : 나중에 true 코드로 변경 예정
    //나중에 화면에 12개의 데이터를 보여줄 때에는 ->
  };
};
