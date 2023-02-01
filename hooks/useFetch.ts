import { AxiosError } from "axios";
import { useCallback, useState } from "react";

export const useFetch = <T>(ApiFunction: Function) => {
  const [error, setError] = useState<AxiosError | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);

  const requestFunction = useCallback(
    async <T>(params?: T) => {
      try {
        setIsLoading(true);
        const response = await ApiFunction(params);
        setData(response);
      } catch (error) {
        if (error instanceof AxiosError) {
          setError(error);
        } else {
          throw new Error(
            "서버 요청 중 알 수 없는 에러가 발생했습니다. 다시 시도해 주세요"
          );
        }
      } finally {
        setIsLoading(false);
      }
    },
    [ApiFunction]
  );

  const resetState = () => {
    setError(null);
    setData(null);
    setIsLoading(false);
  };

  return { error, isLoading, data, resetState, requestFunction };
};
