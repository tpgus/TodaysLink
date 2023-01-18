import HamburgerButton from "./HamburgerButton";
import HamburgerMenu from "./HamburgerMenu";

export interface PropsType {
  isClickedHamburger: boolean;
  onClickHamburger: () => void;
}

const Hamburger = (props: PropsType) => {
  return (
    <>
      <HamburgerButton {...props} />
      <HamburgerMenu {...props} />
    </>
  );
};

export default Hamburger;
