import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { ItemContainer } from "./style/style-LinkItem";

const LinkItem = () => {
  const [isHover, setIsHover] = useState(false);
  const router = useRouter();

  return (
    <>
      <ItemContainer
        isHover={isHover}
        onClick={() => router.push("/detail/1")}
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
      >
        <div className="img-wrapper group">
          <Image
            src={`/images/test5.webp`}
            alt="thumbnail"
            width={288}
            height={384}
            priority={true}
          ></Image>
          {isHover ? <span>자세히 보기</span> : null}
        </div>
        <div className="link-detail">
          <h3>상품 제목</h3>
          <br />
          <p>
            Get the full lineup of our Basic Tees. Have a fresh shirt all week,
            and an extra for laundry day
          </p>
          <div>
            <p>8 colors</p>
            <p>$256</p>
          </div>
        </div>
      </ItemContainer>
      <ItemContainer isHover={false}>
        <div className="img-wrapper group">
          <Image
            src={`/images/test1.webp`}
            alt="thumbnail"
            width={288}
            height={384}
            priority={true}
          ></Image>
        </div>
        <div className="link-detail">
          <h3>상품 제목</h3>
          <br />
          <p>
            Get the full lineup of our Basic Tees. Have a fresh shirt all week,
            and an extra for laundry day
          </p>
          <div>
            <p>8 colors</p>
            <p>$256</p>
          </div>
        </div>
      </ItemContainer>{" "}
      <ItemContainer isHover={false}>
        <div className="img-wrapper group">
          <Image
            src={`/images/test3.webp`}
            alt="thumbnail"
            width={288}
            height={384}
            priority={true}
          ></Image>
        </div>
        <div className="link-detail">
          <h3>상품 제목</h3>
          <br />
          <p>
            Get the full lineup of our Basic Tees. Have a fresh shirt all week,
            and an extra for laundry day
          </p>
          <div>
            <p>8 colors</p>
            <p>$256</p>
          </div>
        </div>
      </ItemContainer>
      <ItemContainer isHover={false}>
        <div className="img-wrapper group">
          <Image
            src={`/images/test4.webp`}
            alt="thumbnail"
            width={288}
            height={384}
          ></Image>
        </div>
        <div className="link-detail">
          <h3>상품 제목</h3>
          <br />
          <p>
            Get the full lineup of our Basic Tees. Have a fresh shirt all week,
            and an extra for laundry day
          </p>
          <div>
            <p>8 colors</p>
            <p>$256</p>
          </div>
        </div>
      </ItemContainer>{" "}
      <ItemContainer isHover={false}>
        <div className="img-wrapper group">
          <Image
            src={`/images/test1.webp`}
            alt="thumbnail"
            width={288}
            height={384}
          ></Image>
        </div>
        <div className="link-detail">
          <h3>상품 제목</h3>
          <br />
          <p>
            Get the full lineup of our Basic Tees. Have a fresh shirt all week,
            and an extra for laundry day
          </p>
          <div>
            <p>8 colors</p>
            <p>$256</p>
          </div>
        </div>
      </ItemContainer>
      <ItemContainer isHover={false}>
        <div className="img-wrapper group">
          <Image
            src={`/images/test5.webp`}
            alt="thumbnail"
            width={288}
            height={384}
            priority={true}
          ></Image>
        </div>
        <div className="link-detail">
          <h3>상품 제목</h3>
          <br />
          <p>
            Get the full lineup of our Basic Tees. Have a fresh shirt all week,
            and an extra for laundry day
          </p>
          <div>
            <p>8 colors</p>
            <p>$256</p>
          </div>
        </div>
      </ItemContainer>
      <ItemContainer isHover={false}>
        <div className="img-wrapper group">
          <Image
            src={`/images/test1.webp`}
            alt="thumbnail"
            width={288}
            height={384}
            priority={true}
          ></Image>
        </div>
        <div className="link-detail">
          <h3>상품 제목</h3>
          <br />
          <p>
            Get the full lineup of our Basic Tees. Have a fresh shirt all week,
            and an extra for laundry day
          </p>
          <div>
            <p>8 colors</p>
            <p>$256</p>
          </div>
        </div>
      </ItemContainer>{" "}
      <ItemContainer isHover={false}>
        <div className="img-wrapper group">
          <Image
            src={`/images/test3.webp`}
            alt="thumbnail"
            width={288}
            height={384}
            priority={true}
          ></Image>
        </div>
        <div className="link-detail">
          <h3>상품 제목</h3>
          <br />
          <p>
            Get the full lineup of our Basic Tees. Have a fresh shirt all week,
            and an extra for laundry day
          </p>
          <div>
            <p>8 colors</p>
            <p>$256</p>
          </div>
        </div>
      </ItemContainer>
      <ItemContainer isHover={false}>
        <div className="img-wrapper group">
          <Image
            src={`/images/test5.webp`}
            alt="thumbnail"
            width={288}
            height={384}
            priority={true}
          ></Image>
        </div>
        <div className="link-detail">
          <h3>상품 제목</h3>
          <br />
          <p>
            Get the full lineup of our Basic Tees. Have a fresh shirt all week,
            and an extra for laundry day
          </p>
          <div>
            <p>8 colors</p>
            <p>$256</p>
          </div>
        </div>
      </ItemContainer>
      <ItemContainer isHover={false}>
        <div className="img-wrapper group">
          <Image
            src={`/images/test1.webp`}
            alt="thumbnail"
            width={288}
            height={384}
            priority={true}
          ></Image>
        </div>
        <div className="link-detail">
          <h3>상품 제목</h3>
          <br />
          <p>
            Get the full lineup of our Basic Tees. Have a fresh shirt all week,
            and an extra for laundry day
          </p>
          <div>
            <p>8 colors</p>
            <p>$256</p>
          </div>
        </div>
      </ItemContainer>{" "}
      <ItemContainer isHover={false}>
        <div className="img-wrapper group">
          <Image
            src={`/images/test3.webp`}
            alt="thumbnail"
            width={288}
            height={384}
            priority={true}
          ></Image>
        </div>
        <div className="link-detail">
          <h3>상품 제목</h3>
          <br />
          <p>
            Get the full lineup of our Basic Tees. Have a fresh shirt all week,
            and an extra for laundry day
          </p>
          <div>
            <p>8 colors</p>
            <p>$256</p>
          </div>
        </div>
      </ItemContainer>
    </>
  );
};

export default LinkItem;
