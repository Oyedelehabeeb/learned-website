/* eslint-disable react/prop-types */
function Select({ options, value, onChange }) {
  return (
    <select
      className="bg-darkGray text-beige rounded-md p-2"
      value={value}
      onChange={onChange}
    >
      {options?.map((option, index) => (
        <option value={option.value} key={index}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
