/* eslint-disable react/prop-types */

const Form = ({
  labelText,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isGeneratingImage,
  randomPromptHandler,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {labelText}
        </label>
        {isGeneratingImage && (
          <button
            type="button"
            onClick={randomPromptHandler}
            className="font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black"
          >Random Image</button>
        )}
      </div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3 border"
      />
    </div>
  );
};

export default Form;
