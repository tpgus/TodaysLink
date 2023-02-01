import * as S from "./style/style-QnAWriting";
import { RotatingLines } from "react-loader-spinner";
import { useRef, useState } from "react";
import { validate } from "../../helpers/checkValidation-util";
import { showNotification } from "../../store/notificationSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import Joi from "joi";
import Notification from "../common/Notification";
import Button from "../ui/Button";
import type { QnaType } from "../../types";

interface PropsType {
  onComplete: () => void;
  onAddQnaToList: (qna: QnaType) => void;
}

const QnAWriting = (props: PropsType) => {
  const [isLoading, setIsLoading] = useState(false);
  const questionTypeRef = useRef<HTMLSelectElement>(null);
  const questionTitleRef = useRef<HTMLInputElement>(null);
  const questionContentRef = useRef<HTMLTextAreaElement>(null);
  const notificationState = useAppSelector((state) => state.notification);
  const dispatch = useAppDispatch();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      questionTitleRef.current === null ||
      questionContentRef.current === null ||
      questionTypeRef.current === null
    ) {
      return;
    }
    const title = questionTitleRef.current.value;
    const content = questionContentRef.current.value;
    const type = questionTypeRef.current.value;

    const validationOptions = Joi.object({
      title: Joi.string().min(3).max(30).required().label("제목"),
      content: Joi.string().min(10).max(500).required().label("내용"),
    });

    const validationResult = await validate(validationOptions, {
      title,
      content,
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

    const bodyData = JSON.stringify({ type, title, content });
    setIsLoading(true);
    fetch("/api/qna", {
      method: "POST",
      body: bodyData,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        let result = await response.json();
        if (response.ok) {
          questionTitleRef.current!.value = "";
          questionContentRef.current!.value = "";
          questionTypeRef.current!.value = "기타";
          dispatch(showNotification({ isPositive: true, message: "등록완료" }));
          props.onComplete();
          props.onAddQnaToList(result.question);
        } else {
          throw new Error(result.message);
        }
      })
      .catch((err) =>
        dispatch(showNotification({ isPositive: false, message: err.message }))
      )
      .finally(() => {
        setIsLoading(false);
      });
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

export default QnAWriting;
