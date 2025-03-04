import Header from "./header.jsx";
import { componentAttribute } from "./attribute/attribute.js";

export default function Rating() {
  return (
    <div>
      <form action="">
        <Header text={componentAttribute.question.header.text} />
      </form>
    </div>
  );
}
