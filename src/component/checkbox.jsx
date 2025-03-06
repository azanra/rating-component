export default function Checkbox({ value, handleSetRating }) {
  return (
    <>
      <label htmlFor={`rating-${value}`}>{value}</label>
      <input
        type="radio"
        id={`rating-${value}`}
        name="rating"
        value={value}
        onChange={handleSetRating}
      />
    </>
  );
}
