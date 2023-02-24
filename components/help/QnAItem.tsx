import PasswordModal from "./PasswordModal";
import { useRouter } from "next/router";
import { AiFillLock } from "react-icons/ai";
import { useState } from "react";
import type { QnaType } from "../../types";

interface PropsType {
  qna: QnaType;
}

const QnAItem = (props: PropsType) => {
  const { qna } = props;
  const router = useRouter();

  const [isClickedItem, setIsClickedItem] = useState(false);

  const registeredDate = qna.registeredDate.toDate();
  const year = registeredDate.getFullYear();
  const month = registeredDate.getMonth() + 1;
  const day = registeredDate.getDate();

  const goToDetailPage = () => {
    router.push(
      {
        pathname: `/help/qna/${qna.id}`,
        query: { qna: JSON.stringify(qna) },
      },
      `/help/qna/${qna.id}`
    );
  };

  const handleClickQnaItem = () => {
    //암호가 있는 경우
    if (qna.password) {
      setIsClickedItem(true);
      return;
    } else {
      goToDetailPage();
    }
  };

  return (
    <>
      {isClickedItem ? (
        <PasswordModal
          onActivateModal={setIsClickedItem}
          onChangePage={goToDetailPage}
          qnaId={qna.id}
        />
      ) : null}
      <tbody onClick={handleClickQnaItem}>
        <tr className={"tb-row"}>
          <td className={"td-status" + `${qna.resolved ? " emphasis" : ""}`}>
            {qna.resolved ? "답변 완료" : "답변 대기"}
          </td>
          <td className="td-type pc-tablet-only">{qna.type}</td>
          <td className="td-title">{qna.title}</td>
          <td className="td-date pc-tablet-only">{`${year}-${month}-${day}`}</td>
          <td className="td-lock">{qna.password ? <AiFillLock /> : ""}</td>
        </tr>
      </tbody>
    </>
  );
};

export default QnAItem;
