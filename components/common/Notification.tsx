import * as S from "./style/style-Notification";
import ReactDOM from "react-dom";
import { useEffect } from "react";
import { hideNotification } from "../../store/notificationSlice";
import { useAppDispatch, useAppSelector } from "../../store";

const Notification = () => {
  const dispatch = useAppDispatch();
  const { isActive, isPositive, message } = useAppSelector(
    (state) => state.notification
  );

  useEffect(() => {
    let timer: NodeJS.Timer;
    if (isActive) {
      timer = setTimeout(() => {
        dispatch(hideNotification());
      }, 700);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, isActive]);

  const portalElement = document.getElementById("overlay-root") as HTMLElement;

  return (
    <>
      {ReactDOM.createPortal(
        <S.NotificationContainer isPositive={isPositive}>
          <div className="icon-wrap">
            {isPositive ? (
              <svg
                className="check-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                aria-hidden="true"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                />
              </svg>
            ) : (
              <svg
                className="text-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
                />
              </svg>
            )}
          </div>
          <div>
            <p>{message}</p>
          </div>
        </S.NotificationContainer>,
        portalElement
      )}
    </>
  );
};

export default Notification;
