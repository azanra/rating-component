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

  return (
    <div>
      <form action="">
        <Header text={componentAttribute.question.header.text} />
        <Body text={componentAttribute.question.body.text} />
        {ratingRadio}
      </form>
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
