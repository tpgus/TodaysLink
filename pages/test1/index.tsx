import { useEffect, useState } from "react";
import { defg } from "../../helpers/firestore";

const Test1 = () => {
  const [data, setData] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let response;
    const test = async () => {
      setIsLoading(true);
      response = await defg();
      setIsLoading(false);
      setData(response[0]);
    };
    test();
  }, []);

  useEffect(() => {}, [data]);

  return (
    <div className="test">
      {isLoading ? <p>로딩 중....</p> : <h1>{data.country}</h1>}
    </div>
  );
};

export default Test1;
