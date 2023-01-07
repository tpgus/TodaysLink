import Link from "next/link";
import styled from "styled-components";

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

const MobileLogo = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
  color: white;
`;

const PcLogo = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: white;
`;
