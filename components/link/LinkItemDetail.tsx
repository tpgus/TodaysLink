import React from "react";
import Image from "next/image";
import Button from "../ui/Button";
import * as S from "./style/style-LinkDetail";

interface PropsType {
  item: {
    id: string;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    announcementDate: Date;
    image: string;
    tags: string[];
    warnings: string[];
    link: string;
    numOfWinner: string;
  };
}

const LinkItemDetail = (props: PropsType) => {
  const { item } = props;
  console.log(item);

  return (
    <S.LinkDetailLayout>
      <S.LinkDetailContainer>
        <div className="test"></div>
        <Image
          className="img"
          src={item.image}
          width={500}
          height={500}
          alt="thumbnail"
        />
        <S.InfoContainer>
          <div className="info__div info__div--header">
            <div>
              <h3 className="item-title">{item.title}</h3>
              <p className="item-description">{item.description}</p>
            </div>
            <div className="actions">
              <Button className="actions__btn">링크 바로가기</Button>
              <Button className="actions__btn">참여 완료</Button>
            </div>
          </div>
          <div className="info__div info__div--period">
            <dl>
              <dt>응모 기간</dt>
              <dd className="period-info__description">
                {item.startDate.toString()} - {item.endDate.toString()}
              </dd>
            </dl>
          </div>
          <div className="info__div info__div--announcement">
            <dl>
              <dt>당첨자 발표</dt>
              <dd className="announcement__description">
                {item.announcementDate.toString()}
              </dd>
            </dl>
          </div>
          <div className="info__div info__div--announcement">
            <dl>
              <dt>당첨 인원</dt>
              <dd>{item.numOfWinner}</dd>
            </dl>
          </div>
          <div className="info__div info__div--announcement">
            <dl>
              <dt>유의 사항</dt>
              <dd>
                <ul>
                  {item.warnings.map((warning) => (
                    <li key={item.id}>{warning}</li>
                  ))}
                </ul>
              </dd>
            </dl>
          </div>
        </S.InfoContainer>
      </S.LinkDetailContainer>
    </S.LinkDetailLayout>
  );
};

export default LinkItemDetail;
