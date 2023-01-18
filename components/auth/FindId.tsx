import Input from "../ui/Input";
import Button from "../ui/Button";
import * as S from "./style/style-FindId";

const FindId = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <S.FindIdLayout>
      <h2>아이디 찾기</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>가입시 등록한 이메일을 입력해 주세요</label>
          <Input type="email" placeholder="example@email.com" />
        </div>
        <Button type="submit">아이디 찾기</Button>
      </form>
    </S.FindIdLayout>
  );
};

export default FindId;
