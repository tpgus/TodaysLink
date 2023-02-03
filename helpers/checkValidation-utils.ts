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
  const target = `[${errorCtx?.label}]`;
  let errorMessage = "";
  switch (errorType) {
    case "string.empty":
      errorMessage = `${target}을(를) 입력해 주세요`;
      break;

    case "string.min":
      errorMessage = `${target} 최소 ${errorCtx?.limit}글자 이상 입력해야 합니다`;
      break;

    case "string.max":
      errorMessage = `${target} 최대 글자 수(${errorCtx?.limit})를 초과했습니다`;
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
