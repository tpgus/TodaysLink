import * as S from "./style/style-Logo";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillHome } from "react-icons/ai";

interface PropsType {
  txtColor?: string;
  pc?: boolean;
}

const Logo = (props: PropsType) => {
  const router = useRouter;
  //모바일임에도 PC와 같은 형태의 로고를 보여줘야 할 경우
  if (props.pc) {
    return (
      <S.Logo>
        <Link href="/#" passHref>
          <S.PcLogo txtColor={props.txtColor}>Todays Link</S.PcLogo>
        </Link>
      </S.Logo>
    );
  }

  return (
    <S.Logo>
      <button onClick={() => (location.href = "/")}>
        <S.MobileLogo txtColor={props.txtColor} className="mobile-only">
          <AiFillHome />
        </S.MobileLogo>
        <S.PcLogo txtColor={props.txtColor} className="pc-tablet-only">
          Todays Link
        </S.PcLogo>
      </button>
    </S.Logo>
  );
};

export default Logo;
