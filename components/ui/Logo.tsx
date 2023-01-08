import Link from "next/link";
import { MobileLogo, PcLogo } from "./style/style-Logo";

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <MobileLogo className="mobile-only">T</MobileLogo>
        <PcLogo className="pc-tablet-only">TODAYS LINK</PcLogo>
      </Link>
    </div>
  );
};

export default Logo;