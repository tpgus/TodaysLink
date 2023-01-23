import { RotatingLines } from "react-loader-spinner";
import * as S from "./style/style-LoadingSpinner";

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
