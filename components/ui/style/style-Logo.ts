import styled from "styled-components";

export const MobileLogo = styled.span<{ txtColor?: string }>`
  font-size: 1.3rem;
  font-weight: bold;
  color: ${({ txtColor }) => txtColor || "#fff"};
`;

export const PcLogo = styled.span<{ txtColor?: string }>`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ txtColor }) => txtColor || "#fff"};
`;
