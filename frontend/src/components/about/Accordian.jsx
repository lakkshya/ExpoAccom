import { useState } from "react";
import { MdAdd } from "react-icons/md";

const Accordian = ({ faq }) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const toggleVisibility = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };

  return (
    <div
      className={`flex flex-col gap-1 rounded-xl ${
        isAnswerVisible ? "bg-white" : ""
      }`}
    >
      <div
        className={`flex justify-between hover:bg-white !p-4 cursor-pointer rounded-xl transition-transform duration-300 ${
          isAnswerVisible ? "text-[#E03F05]" : ""
        }`}
        onClick={toggleVisibility}
      >
        <p className="text-[0.9rem]/6 md:text-[1rem]/7">{faq.question}</p>
        <div>
          <MdAdd
            className={`transition-transform duration-300 text-[1.2rem] ${
              isAnswerVisible ? "rotate-45" : "rotate-0"
            }`}
          />
        </div>
      </div>

      {isAnswerVisible && (
        <p className="text-[0.85rem]/6 md:text-[0.9rem]/7 text-gray-800 !px-4 !pb-4">
          {faq.answer}
        </p>
      )}
    </div>
  );
};

export default Accordian;
