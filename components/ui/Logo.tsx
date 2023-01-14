import Link from "next/link";
import { MobileLogo, PcLogo } from "./style/style-Logo";

interface PropsType {
  txtColor?: string;
}

const Logo = (props: PropsType) => {
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
