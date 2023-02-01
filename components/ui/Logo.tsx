import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import * as S from "./style/style-Logo";

interface PropsType {
  txtColor?: string;
  pc?: boolean;
}

const Logo = (props: PropsType) => {
  //모바일임에도 PC와 같은 형태의 로고를 보여줘야 할 경우
  if (props.pc) {
    return (
      <div>
        <Link href="/#" passHref>
          <S.PcLogo txtColor={props.txtColor}>Todays Link</S.PcLogo>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link href="/#" passHref>
        <S.MobileLogo txtColor={props.txtColor} className="mobile-only">
          <AiFillHome />
        </S.MobileLogo>
        <S.PcLogo txtColor={props.txtColor} className="pc-tablet-only">
          Todays Link
        </S.PcLogo>
      </Link>
    </div>
  );
};

export default Logo;
