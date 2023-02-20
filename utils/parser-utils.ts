enum DAY {
  "일요일" = 0,
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
}

export const dateParser = (date: Date) => {
  const rawDate = new Date(date);
  const formattedDate = rawDate.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  const dayIdx = rawDate.getDay();
  const day = DAY[dayIdx];

  // "년 월 일 시간 분" 형식에서 시간 앞에 요일을 추가
  const splitedDate = formattedDate.split(" ");
  splitedDate.splice(3, 0, day);
  const parsedDate = splitedDate.join(" ");

  //요일이 넘어가는 오전 12:00는 제외 (혼란 방지)
  if (parsedDate.includes("오전 12:00")) {
    return parsedDate.split("오전")[0];
  }
  return parsedDate;
};

export const separateLine = (target: string) => {
  return target.split("\\n");
};
