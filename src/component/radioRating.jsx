export default function Radio({ value, handleSetRating }) {
  return (
    <>
      <label
        htmlFor={`rating-${value}`}
        className="inline-block px-6 py-4 rounded-[50%] font-bold hover:bg-white hover:text-[#252d37] has-checked:bg-[#fb7413] has-checked:text-[#252d37] bg-[#343942]"
      >
        {value}
        <input
          type="radio"
          id={`rating-${value}`}
          name="rating"
          value={value}
          onChange={handleSetRating}
          className="hidden"
        />
      </label>
    </>
  );
}
