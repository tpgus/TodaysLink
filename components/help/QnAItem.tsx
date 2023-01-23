import type { QnaType } from "../../types/commonType";

interface PropsType {
  qna: QnaType;
}

const QnAItem = (props: PropsType) => {
  const { qna } = props;

  const registeredDate = new Date(qna.registeredDate);
  const year = registeredDate.getFullYear();
  const month = registeredDate.getMonth() + 1;
  const day = registeredDate.getDate();

  return (
    <tbody>
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
