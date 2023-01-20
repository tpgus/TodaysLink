import * as S from "./style/style-LinkDetail";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { LinkItemType } from "../../types/commonType";

interface PropsType {
  linkItem: LinkItemType;
}

const LinkItemDetail = ({ linkItem }: PropsType) => {
  return (
    <S.LinkDetailLayout>
      <S.LinkDetailContainer>
        <Image
          className="img"
          src={linkItem.image}
          width={500}
          height={500}
          alt="thumbnail"
        />
        <S.InfoContainer>
          <div className="info__div info__div--header">
            <div>
              <h3 className="item-title">{linkItem.title}</h3>
              <p className="item-description">{linkItem.description}</p>
            </div>
            <div className="actions">
              <Link
                className="actions__link"
                href={linkItem.url}
                target="_blank"
              >
                링크 바로가기
              </Link>
              <Button className="actions__btn">참여 완료</Button>
            </div>
          </div>
          <div className="info__div">
            <dl>
              <dt>응모 기간</dt>
              <dd>
                {linkItem.startDate.toString()} - {linkItem.endDate.toString()}
              </dd>
            </dl>
          </div>
          <div className="info__div">
            <dl>
              <dt>당첨자 발표</dt>
              <dd>{linkItem.announcementDate.toString()}</dd>
            </dl>
          </div>
          <div className="info__div">
            <dl>
              <dt>당첨 인원</dt>
              <dd>{linkItem.numOfWinner}</dd>
            </dl>
          </div>
          <div className="info__div">
            <dl>
              <dt>유의 사항</dt>
              <dd>
                <ul>
                  {linkItem.warnings.map((warning) => (
                    <li key={uuidv4()}>{warning}</li>
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
