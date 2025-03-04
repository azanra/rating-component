import Header from "./header.jsx";
import { componentAttribute } from "./attribute/attribute.js";
import Body from "./body.jsx";

function Question() {
  return (
    <div>
      <form action="">
        <Header text={componentAttribute.question.header.text} />
        <Body text={componentAttribute.question.body.text} />
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
