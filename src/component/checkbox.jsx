export default function Checkbox({ value }) {
  return (
    <>
      <label htmlFor={`rating-${value}`}>{value}</label>
      <input type="radio" id={`rating-${value}`} name="rating" />
    </>
  );
}
