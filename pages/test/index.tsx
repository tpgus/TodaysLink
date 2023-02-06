import { ChangeEvent, useState, useEffect } from "react";
import { abc } from "../../helpers/firestore";

const Test = () => {
  const [val, setVal] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(val);
  }, [val]);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setVal(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    abc();
    // fetch("/api/test", {
    //   method: "POST",
    //   body: JSON.stringify({ userInput: val }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log("data"))
    //   .catch();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="test">테스트</label>
        <input
          type="text"
          id="test"
          placeholder="테스트 영역"
          onChange={handleInput}
        />
        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default Test;
