import Link from "next/link";
import { MobileLogo, PcLogo } from "./style/style-Logo";

interface PropsType {
  txtColor?: string;
  pc?: boolean;
}

const Logo = (props: PropsType) => {
  if (props.pc) {
    return (
      <div>
        <Link href="/">
          <PcLogo txtColor={props.txtColor}>Todays Link</PcLogo>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link href="/">
        <MobileLogo txtColor={props.txtColor} className="mobile-only">
          T
        </MobileLogo>
        <PcLogo txtColor={props.txtColor} className="pc-tablet-only">
          Todays Link
        </PcLogo>
      </Link>
    </div>
  );
};

export default Logo;
