import Head from "next/head";
import FAQList from "../../components/help/FAQList";
import HelpPageLayout from "../../components/help/HelpPageLayout";
import fs from "fs/promises";
import path from "path";
import type { GetStaticProps } from "next";
import type { FaqListType } from "../../types/commonType";
import type { ReactElement } from "react";

interface PropsType {
  faqList: FaqListType;
}

const FAQPage = (props: PropsType) => {
  return (
    <>
      <Head>
        <title>투데이 링크 - 자주 묻는 질문</title>
        <meta
          name="description"
          content="투데이 링크 사이트 이용과 관련되어 자주 묻는 질문들과 답변을 확인하실 수 있습니다."
        />
      </Head>
      <FAQList faqList={props.faqList} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const filePath = path.join(process.cwd(), "public", "data", "faq.json");
  const jsonData = await fs.readFile(filePath);
  const parsedData = JSON.parse(jsonData.toString());
  const faqList: FaqListType = parsedData.faqList;

  return {
    props: {
      faqList,
    },
  };
};

FAQPage.getLayout = function getLayout(page: ReactElement) {
  return <HelpPageLayout>{page}</HelpPageLayout>;
};

export default FAQPage;
