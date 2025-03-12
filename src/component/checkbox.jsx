export default function Checkbox({ value, handleSetRating }) {
  return (
    <>
      <label htmlFor={`rating-${value}`} className="inline-block">
        {value}
      </label>
      <input
        type="radio"
        id={`rating-${value}`}
        name="rating"
        value={value}
        onChange={handleSetRating}
        className="hidden"
      />
    </>
  );
}
