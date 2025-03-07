import Header from "./header.jsx";
import { componentAttribute } from "./attribute/attribute.js";
import Body from "./body.jsx";
import Checkbox from "./checkbox.jsx";
import { useState } from "react";

function Question() {
  const [rating, setRating] = useState(0);

  const handleSetRating = (event) => {
    setRating(Number(event.target.value));
  };

  const ratingRadio = (function () {
    const ratingOption = [1, 2, 3, 4, 5];
    const ratingRadio = ratingOption.map((item, index) => {
      return (
        <Checkbox key={index} value={item} handleSetRating={handleSetRating} />
      );
    });
    return ratingRadio;
  })();

  <div>
    <form>
      <Header text={componentAttribute.question.header.text} />
      <Body text={componentAttribute.question.body.text} />
      {ratingRadio}
      <button>Submit</button>
    </form>
  </div>;
}

function Answer({ rating, ratingOption }) {
  return (
    <div>
      <span>{`You selected ${rating} out of ${ratingOption}`}</span>
      <Header text={componentAttribute.answer.header.text} />
      <Body text={componentAttribute.answer.body.text} />
    </div>
  );
}

export default function Rating() {
  return (
    <>
      <Question />
    </>
  );
}
