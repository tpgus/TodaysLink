import Input from "../ui/Input";
import Button from "../ui/Button";
import * as S from "./style/style-SignUp";

const SignUp = () => {
  //유효성 검사는 서버 APIㅇㅔ서도 수행해야 한다.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <S.SingUpLayout>
      <h2>회원가입</h2>
      <S.SignUpContainer>
        <S.SingUpForm onSubmit={handleSubmit}>
          <div className="form__div">
            <label htmlFor="id">
              아이디 <span>필수 입력</span>
            </label>
            <Input id="id" type="text" placeholder="영문, 숫자 5~15자" />
          </div>
          <div className="form__div">
            <label htmlFor="password">
              비밀번호 <span>필수 입력</span>
            </label>

            <Input
              id="password"
              type="password"
              placeholder="숫자, 영문, 특수문자 조합 최소 8자"
            />
            <Input
              id="passwordConfirm"
              type="password"
              placeholder="비밀번호 재입력"
            />
          </div>
          <div className="form__div">
            <label htmlFor="email">
              이메일 <span>필수 입력</span>
            </label>
            <div className="email__div">
              <Input className="email__input" id="email" type="email" />
              <Button className="email__btn">인증</Button>
            </div>
          </div>
          <div className="form__div form__div--agreement">
            <input
              id="checkobx"
              type="checkbox"
              className="agreement__checkbox"
            />
            <label htmlFor="checkobx">
              [필수] 개인정보 수집 및 이용 동의
              <button className="agreement__btn--detail">자세히 보기</button>
            </label>
          </div>
          <Button className="form__btn">가입하기</Button>
        </S.SingUpForm>
      </S.SignUpContainer>
    </S.SingUpLayout>
  );
};

export default SignUp;
