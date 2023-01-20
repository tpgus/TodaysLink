import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import * as S from "./style/style-LinkItem";
import type { LinkItemType } from "../../types/commonType";

interface PropsType {
  linkItem: LinkItemType;
}

const LinkItem = ({ linkItem }: PropsType) => {
  const router = useRouter();
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <S.ItemContainer
        isHover={isHover}
        onClick={() => router.push(`/detail/${linkItem.id}`)}
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
      >
        <div className="img-wrap">
          <Image
            src={linkItem.image}
            alt="preview-image"
            width={240}
            height={300}
            priority
          ></Image>
          {isHover ? (
            <span className="pc-tablet-only detail__span">자세히 보기</span>
          ) : null}
        </div>
        <div className="info-wrap">
          <h3 className="info-title">{linkItem.title}</h3>
          <br />
          <p>{linkItem.description}</p>
          <div className="sub-info">
            <span className="sub-info__span">8 colors</span>
            <span className="sub-info__span">$256</span>
          </div>
        </div>
      </S.ItemContainer>
    </>
  );
};

export default LinkItem;
