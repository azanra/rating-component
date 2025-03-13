import Header from "./header.jsx";
import { componentAttribute } from "./attribute/attribute.js";
import Body from "./body.jsx";
import Radio from "./radioRating.jsx";
import { useState } from "react";
import iconStar from "../assets/images/icon-star.svg";
import illustration from "../assets/images/illustration-thank-you.svg";

function Question() {
  const [rating, setRating] = useState(0);
  const [displayAnswer, setDisplayAnswer] = useState(false);

  const handleSetRating = (event) => {
    setRating(Number(event.target.value));
  };

  const handleDisplayAnswer = () => {
    setDisplayAnswer(!displayAnswer);
  };

  const ratingRadio = (function () {
    const ratingOption = [1, 2, 3, 4, 5];
    const ratingRadio = ratingOption.map((item, index) => {
      return (
        <Radio key={index} value={item} handleSetRating={handleSetRating} />
      );
    });
    return ratingRadio;
  })();

  return displayAnswer ? (
    <Answer rating={rating} ratingOption={5} />
  ) : (
    <div className="p-8 bg-[#252d37] rounded-3xl w-1/4">
      <form>
        <div className="size-fit bg-[#343942] px-4 py-4 rounded-[50%]">
          <img src={iconStar} alt="icon star" />
        </div>
        <Header text={componentAttribute.question.header.text} />
        <Body text={componentAttribute.question.body.text} />
        <div className="flex justify-center gap-7">{ratingRadio}</div>
        <div>
          <button
            onClick={handleDisplayAnswer}
            className="w-full bg-[#fb7413] mt-8 py-4 rounded-full text-[#252d37] font-bold tracking-widest hover:bg-white"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}

function Answer({ rating, ratingOption }) {
  return (
    <div className="p-8 bg-[#252d37] rounded-3xl w-1/4">
      <div>
        <img src={illustration} alt="note illustration" />
      </div>
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
