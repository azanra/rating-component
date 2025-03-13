export default function Rating({ value, handleSetRating }) {
  return (
    <>
      <label
        htmlFor={`rating-${value}`}
        className="inline-block px-6 py-4 rounded-[50%] font-bold bg-[#383e47] hover:bg-white hover:text-[#252d37] has-checked:bg-[#fb7413] has-checked:text-[#252d37] "
      >
        {value}
        <input
          type="radio"
          id={`rating-${value}`}
          name="rating"
          value={value}
          onChange={handleSetRating}
          className="hidden checked:bg-[#fb7413] checked:text-[#252d37]"
        />
      </label>
    </>
  );
}
