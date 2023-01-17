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
  return (
    <>
      {/* <div className="pc-tablet-only"> */}
      <LinkItemDetail item={props.item} />
      {/* </div> */}
      <div className="mobile-only"></div>
    </>
  );
};

export default ItemDetailPage;

interface Params extends ParsedUrlQuery {
  itemId: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { itemId } = context.params as Params;
  const linkItem = dummyData.filter((data) => data.id === itemId);
  return {
    props: { item: linkItem[0] },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{ params: { itemId: "1" } }],
    fallback: false,
  };
};
