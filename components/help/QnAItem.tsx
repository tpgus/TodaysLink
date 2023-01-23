import type { QnaType } from "../../types/commonType";
import { useRouter } from "next/router";
interface PropsType {
  qna: QnaType;
}

const QnAItem = (props: PropsType) => {
  const router = useRouter();
  const { qna } = props;

  const registeredDate = new Date(qna.registeredDate);
  const year = registeredDate.getFullYear();
  const month = registeredDate.getMonth() + 1;
  const day = registeredDate.getDate();

  const handleClickQnaItem = () => {
    router.push(
      {
        pathname: `/help/qna/${qna._id}`,
        query: { qna: JSON.stringify(qna) },
      },
      `/help/qna/${qna._id}`
    );
  };

  return (
    <tbody onClick={handleClickQnaItem}>
      <tr className={"tb-row"}>
        <td className="td-status">
          {qna.resolved ? "답변 완료" : "답변 대기"}
        </td>
        <td className="td-type pc-tablet-only">{qna.type}</td>
        <td className="td-title">{qna.title}</td>
        <td className="td-date pc-tablet-only">{`${year}-${month}-${day}`}</td>
      </tr>
    </tbody>
  );
};

export default QnAItem;
