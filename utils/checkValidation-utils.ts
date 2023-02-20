import Joi, { ValidationError } from "joi";

export const checkNull = (target: any) => {
  if (Array.isArray(target)) {
    return target.every((item) => item === null);
  }
  return target === null;
};

//아래 validate 함수에서 호출
export const getErrorMessage = (error: ValidationError) => {
  const { context: errorCtx, type: errorType } = error.details[0];
  let errorMessage = "";

  if (!errorCtx) {
    errorMessage = "알 수 없는 에러가 발생하였습니다.";
    return { errorMessage };
  }

  const target = `[${errorCtx.label}]`;
  switch (errorType) {
    case "string.empty":
      errorMessage = `${target}을(를) 입력해 주세요`;
      break;

    case "string.min":
      errorMessage = `${target} 최소 ${errorCtx.limit}글자 이상 입력해야 합니다`;
      break;

    case "string.max":
      errorMessage = `${target} 최대 글자 수(${errorCtx.limit})를 초과했습니다`;
      break;

    case "string.alphanum":
      errorMessage = `${target}는(은) 영문자, 숫자로 이루어져야 합니다.`;
      break;

    case "string.pattern.base":
      const regex = errorCtx.regex.source;
      if (regex === "^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$") {
        //password
        errorMessage = `${target}은 숫자, 영문, 특수문자 조합 최소 8자 최대 16자여야 합니다.`;
      } else if (regex === "^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$") {
        //email
        errorMessage = `올바른 ${target}을 입력해 주세요`;
      }
      break;

    case "string.email":
      errorMessage = `올바른 ${target}을 입력해 주세요`;
      break;

    case "any.only":
      //현재 Joi.ref를 비밀번호 재입력에서만 사용하고 있으므로 any.only 하나만으로도 분기가 가능한 상태
      errorMessage = `비밀번호를 확인해 주세요`;
      break;

    case "object.unkown":
      errorMessage = "조건 검사식 오류입니다 (오타)";
      break;

    default:
      errorMessage = errorType + " is Occured";
      break;
  }

  return { errorMessage };
};

export const validate = async <T>(
  condition: Joi.ObjectSchema<any>,
  target: T
) => {
  //정상일 때, error : undefined
  //실패일 때, error : ValidationError
  const { error } = condition.validate(target);
  if (error) {
    return getErrorMessage(error);
  }
  return { errorMessage: null };
};
