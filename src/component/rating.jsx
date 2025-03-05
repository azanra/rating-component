import Header from "./header.jsx";
import { componentAttribute } from "./attribute/attribute.js";
import Body from "./body.jsx";
import Checkbox from "./checkbox.jsx";

const ratingRadio = () => {
  const ratingOption = [1, 2, 3, 4, 5];
  const ratingRadio = ratingOption.map((item) => {
    return <Checkbox value={item} />;
  });
  return ratingRadio;
};

function Question() {
  return (
    <div>
      <form action="">
        <Header text={componentAttribute.question.header.text} />
        <Body text={componentAttribute.question.body.text} />
        {ratingRadio()}
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
