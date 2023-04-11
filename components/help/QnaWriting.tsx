import * as S from "./style/style-QnAWriting";
import Joi from "joi";
import Button from "../ui/Button";
import Notification from "../common/Notification";
import { validate } from "../../utils/checkValidation-utils";
import { createQnA } from "../../client-apis/api/qna";
import { useRef, useState } from "react";
import { showNotification } from "../../store/notificationSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import type { QnaType } from "../../types";

interface PropsType {
  onComplete: () => void;
  onAddQnaToList: (qna: QnaType) => void;
}

const QnaWriting = (props: PropsType) => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const questionTypeRef = useRef<HTMLSelectElement>(null);
  const questionTitleRef = useRef<HTMLInputElement>(null);
  const questionContentRef = useRef<HTMLTextAreaElement>(null);
  const questionPasswordRef = useRef<HTMLInputElement>(null);
  const notificationState = useAppSelector((state) => state.notification);

  const resetInputValue = () => {
    questionTitleRef.current!.value = "";
    questionContentRef.current!.value = "";
    questionTypeRef.current!.value = "기타";
    questionPasswordRef.current!.value = "";
  };

  //문의 등록
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // 요소들이 렌더링된 이후 등록 버튼을 누를 수 있으므로 이 시점에서는 존재한다.
    const title = questionTitleRef.current!.value;
    const content = questionContentRef.current!.value;
    const type = questionTypeRef.current!.value;
    const password = questionPasswordRef.current!.value;

    const validationSchema = Joi.object({
      title: Joi.string().min(3).max(30).required().label("제목"),
      content: Joi.string().min(10).max(500).required().label("내용"),
      password: Joi.string().min(0).max(10).label("비밀번호"),
    });

    const validationResult = await validate(validationSchema, {
      title,
      content,
      password,
    });

    if (validationResult.errorMessage) {
      dispatch(
        showNotification({
          isPositive: false,
          message: validationResult.errorMessage,
        })
      );
      return;
    }

    try {
      setIsLoading(true);
      const result = await createQnA({ type, title, content, password });
      if (result.createdQnA) {
        dispatch(showNotification({ isPositive: true, message: "등록완료" }));
        resetInputValue();
        props.onComplete();
        props.onAddQnaToList(result.createdQnA);
      }
    } catch (error) {
      dispatch(
        showNotification({
          isPositive: false,
          message: "문의 등록에 실패했습니다. 다시 시도해 주세요",
        })
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.WritingContainer>
      {notificationState.isActive ? <Notification /> : null}
      <div className="form-wrap">
        <form onSubmit={handleSubmit}>
          <div className="input-wrap">
            <label htmlFor="type">문의 유형</label>
            <select ref={questionTypeRef} id="type">
              <option value="기타">기타</option>
              <option value="사이트 이용">사이트 이용</option>
              <option value="계정">계정</option>
            </select>
          </div>
          <div className="input-wrap">
            <label htmlFor="title">제목</label>
            <input
              ref={questionTitleRef}
              id="title"
              placeholder="최대 30자 이내로 작성해 주세요"
            />
          </div>
          <div className="input-wrap">
            <label htmlFor="content">문의 내용</label>
            <textarea
              ref={questionContentRef}
              id="content"
              placeholder="최대 500자 이내로 작성해 주세요"
            />
          </div>
          <div className="input-wrap">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              ref={questionPasswordRef}
              id="password"
              placeholder="게시물 비밀번호"
            />
          </div>

          <div className="actions-wrap">
            <Button
              className="registration__btn"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "등록 중..." : "등록하기"}
            </Button>
          </div>
        </form>
      </div>
    </S.WritingContainer>
  );
};

export default QnaWriting;
