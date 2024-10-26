import React from "react";

const Fullcard = ({ data, close }) => {
  if (!data) return null; // Return null if no data is passed

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-1/2 p-6 rounded-lg shadow-lg relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-xl font-bold text-red-600 hover:text-red-800"
          onClick={close}
        >
          X
        </button>

        {/* Full Card Content */}
        <div className="flex flex-col items-center">
          {/* Card Header */}
          <h2 className="text-3xl font-bold mb-2">{data.header}</h2>

          {/* Card Description Info */}
          <p className="text-gray-700 text-lg mb-4">{data.descriptioninfo}</p>
        </div>
      </div>
    </div>
  );
};

export default Fullcard;
