import Image from "next/image";
import { ItemContainer } from "./style/style-LinkItem";

//아이디
//제목
//링크
//일정
//기타정보

const LinkItem = () => {
  return (
    <>
      <ItemContainer className="group">
        <div className="img-wrapper group">
          <Image
            src={`/images/test.webp`}
            alt="thumbnail"
            width={288}
            height={384}
          ></Image>
        </div>
        <div className="link-detail group">
          <h3>상품 제목</h3>
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
      <ItemContainer className="group">
        <div className="img-wrapper group">
          <Image
            src={`/images/test1.webp`}
            alt="thumbnail"
            width={288}
            height={384}
          ></Image>
        </div>
        <div className="link-detail group">
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
      <ItemContainer className="group">
        <div className="img-wrapper group">
          <Image
            src={`/images/test3.webp`}
            alt="thumbnail"
            width={288}
            height={384}
          ></Image>
        </div>
        <div className="link-detail group">
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
      <ItemContainer className="group">
        <div className="img-wrapper group">
          <Image
            src={`/images/test.webp`}
            alt="thumbnail"
            width={288}
            height={384}
          ></Image>
        </div>
        <div className="link-detail group">
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
      <ItemContainer className="group">
        <div className="img-wrapper group">
          <Image
            src={`/images/test.webp`}
            alt="thumbnail"
            width={288}
            height={384}
          ></Image>
        </div>
        <div className="link-detail group">
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
