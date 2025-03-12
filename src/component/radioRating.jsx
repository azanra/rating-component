export default function Radio({ value, handleSetRating }) {
  return (
    <>
      <label
        htmlFor={`rating-${value}`}
        className="inline-block px-6 py-4 border-1 rounded-[50%]"
      >
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
