import Head from "next/head";
import FaqList from "../../components/help/FaqList";
import HelpPageLayout from "../../components/help/HelpPageLayout";
import { buildFilePath, readFileData } from "../../server/utils/file-utils";
import type { GetStaticProps } from "next";
import type { ReactElement } from "react";
import type { FaqType } from "../../types";

interface PropsType {
  faqList: FaqType[];
}

const FaqPage = (props: PropsType) => {
  return (
    <>
      <Head>
        <title>투데이 링크 - 자주 묻는 질문</title>
        <meta
          name="description"
          content="투데이 링크 사이트 이용과 관련되어 자주 묻는 질문들과 답변을 확인하실 수 있습니다."
        />
      </Head>
      <FaqList faqList={props.faqList} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const filePath = buildFilePath("faq.json");
  const faqList = await readFileData<FaqType[]>(filePath);

  return {
    props: {
      faqList,
    },
  };
};

FaqPage.getLayout = function getLayout(page: ReactElement) {
  return <HelpPageLayout>{page}</HelpPageLayout>;
};

export default FaqPage;
