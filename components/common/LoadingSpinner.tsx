import * as S from "./style/style-LoadingSpinner";
import { RotatingLines } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <S.SpinnerContainer>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.55"
        width="50"
        visible={true}
      />
    </S.SpinnerContainer>
  );
};

export default LoadingSpinner;
