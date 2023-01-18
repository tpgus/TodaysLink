import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import * as S from "./style/style-LinkItem";

const LinkItem = () => {
  const router = useRouter();
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <S.ItemContainer
        isHover={isHover}
        onClick={() => router.push("/detail/1")}
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
      >
        <div className="img-wrap">
          <Image
            src={`/images/test5.webp`}
            alt="thumbnail"
            width={300}
            height={300}
            priority={true}
          ></Image>
          {isHover ? (
            <span className="pc-tablet-only detail__span">자세히 보기</span>
          ) : null}
        </div>
        <div className="info-wrap">
          <h3 className="info-title">상품 제목</h3>
          <br />
          <p>
            Get the full lineup of our Basic Tees. Have a fresh shirt all week,
            and an extra for laundry day
          </p>
          <div className="sub-info">
            <span className="sub-info__span">8 colors</span>
            <span className="sub-info__span">$256</span>
          </div>
        </div>
      </S.ItemContainer>
      <S.ItemContainer isHover={false}>
        <div className="img-wrap">
          <Image
            src={`/images/test1.webp`}
            alt="thumbnail"
            width={288}
            height={384}
            priority={true}
          ></Image>
        </div>
        <div className="info-wrap">
          <h3 className="info-title">상품 제목</h3>
          <br />
          <p>
            Get the full lineup of our Basic Tees. Have a fresh shirt all week,
            and an extra for laundry day
          </p>
          <div className="sub-info">
            <span className="sub-info__span">8 colors</span>
            <span className="sub-info__span">$256</span>
          </div>
        </div>
      </S.ItemContainer>{" "}
      <S.ItemContainer isHover={false}>
        <div className="img-wrap">
          <Image
            src={`/images/test3.webp`}
            alt="thumbnail"
            width={288}
            height={384}
            priority={true}
          ></Image>
        </div>
        <div className="info-wrap">
          <h3 className="info-title">상품 제목</h3>
          <br />
          <p>
            Get the full lineup of our Basic Tees. Have a fresh shirt all week,
            and an extra for laundry day
          </p>
          <div className="sub-info">
            <span className="sub-info__span">8 colors</span>
            <span className="sub-info__span">$256</span>
          </div>
        </div>
      </S.ItemContainer>
      <S.ItemContainer isHover={false}>
        <div className="img-wrap">
          <Image
            src={`/images/test4.webp`}
            alt="thumbnail"
            width={288}
            height={384}
          ></Image>
        </div>
        <div className="info-wrap">
          <h3 className="info-title">상품 제목</h3>
          <br />
          <p>
            Get the full lineup of our Basic Tees. Have a fresh shirt all week,
            and an extra for laundry day
          </p>
          <div className="sub-info">
            <span className="sub-info__span">8 colors</span>
            <span className="sub-info__span">$256</span>
          </div>
        </div>
      </S.ItemContainer>{" "}
      <S.ItemContainer isHover={false}>
        <div className="img-wrap">
          <Image
            src={`/images/test1.webp`}
            alt="thumbnail"
            width={288}
            height={384}
          ></Image>
        </div>
        <div className="info-wrap">
          <h3 className="info-title">상품 제목</h3>
          <br />
          <p>
            Get the full lineup of our Basic Tees. Have a fresh shirt all week,
            and an extra for laundry day
          </p>
          <div className="sub-info">
            <span className="sub-info__span">8 colors</span>
            <span className="sub-info__span">$256</span>
          </div>
        </div>
      </S.ItemContainer>
      <S.ItemContainer isHover={false}>
        <div className="img-wrap">
          <Image
            src={`/images/test5.webp`}
            alt="thumbnail"
            width={288}
            height={384}
            priority={true}
          ></Image>
        </div>
        <div className="info-wrap">
          <h3 className="info-title">상품 제목</h3>
          <br />
          <p>
            Get the full lineup of our Basic Tees. Have a fresh shirt all week,
            and an extra for laundry day
          </p>
          <div className="sub-info">
            <span className="sub-info__span">8 colors</span>
            <span className="sub-info__span">$256</span>
          </div>
        </div>
      </S.ItemContainer>
      <S.ItemContainer isHover={false}>
        <div className="img-wrap">
          <Image
            src={`/images/test1.webp`}
            alt="thumbnail"
            width={288}
            height={384}
            priority={true}
          ></Image>
        </div>
        <div className="info-wrap">
          <h3 className="info-title">상품 제목</h3>
          <br />
          <p>
            Get the full lineup of our Basic Tees. Have a fresh shirt all week,
            and an extra for laundry day
          </p>
          <div className="sub-info">
            <span className="sub-info__span">8 colors</span>
            <span className="sub-info__span">$256</span>
          </div>
        </div>
      </S.ItemContainer>{" "}
      <S.ItemContainer isHover={false}>
        <div className="img-wrap">
          <Image
            src={`/images/test3.webp`}
            alt="thumbnail"
            width={288}
            height={384}
            priority={true}
          ></Image>
        </div>
        <div className="info-wrap">
          <h3 className="info-title">상품 제목</h3>
          <br />
          <p>
            Get the full lineup of our Basic Tees. Have a fresh shirt all week,
            and an extra for laundry day
          </p>
          <div className="sub-info">
            <span className="sub-info__span">8 colors</span>
            <span className="sub-info__span">$256</span>
          </div>
        </div>
      </S.ItemContainer>
      <S.ItemContainer isHover={false}>
        <div className="img-wrap">
          <Image
            src={`/images/test5.webp`}
            alt="thumbnail"
            width={288}
            height={384}
            priority={true}
          ></Image>
        </div>
        <div className="info-wrap">
          <h3 className="info-title">상품 제목</h3>
          <br />
          <p>
            Get the full lineup of our Basic Tees. Have a fresh shirt all week,
            and an extra for laundry day
          </p>
          <div className="sub-info">
            <span className="sub-info__span">8 colors</span>
            <span className="sub-info__span">$256</span>
          </div>
        </div>
      </S.ItemContainer>
      <S.ItemContainer isHover={false}>
        <div className="img-wrap">
          <Image
            src={`/images/test1.webp`}
            alt="thumbnail"
            width={288}
            height={384}
            priority={true}
          ></Image>
        </div>
        <div className="info-wrap">
          <h3 className="info-title">상품 제목</h3>
          <br />
          <p>
            Get the full lineup of our Basic Tees. Have a fresh shirt all week,
            and an extra for laundry day
          </p>
          <div className="sub-info">
            <span className="sub-info__span">8 colors</span>
            <span className="sub-info__span">$256</span>
          </div>
        </div>
      </S.ItemContainer>{" "}
      <S.ItemContainer isHover={false}>
        <div className="img-wrap">
          <Image
            src={`/images/test3.webp`}
            alt="thumbnail"
            width={288}
            height={384}
            priority={true}
          ></Image>
        </div>
        <div className="info-wrap">
          <h3 className="info-title">상품 제목</h3>
          <br />
          <p>
            Get the full lineup of our Basic Tees. Have a fresh shirt all week,
            and an extra for laundry day
          </p>
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
