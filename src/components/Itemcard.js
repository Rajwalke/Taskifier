const ItemCard = ({ data, onClickData }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div
        className="bg-white border border-navy-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
        onClick={onClickData}
      >
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2 text-navy-800">Heading</h2>
          <p className="text-navy-600 mb-4">{data.header}</p>
          <h3 className="text-lg font-medium text-navy-700">Task</h3>
          <p className="text-navy-600">{data.descriptioninfo}</p>
          <p className="mt-2">
            {data.inprogress === true ? (
              <span className="text-yellow-500">🟡 In Progress</span>
            ) : data.done === true ? (
              <span className="text-green-500">🟢 Done</span>
            ) : data.Pending === true ? (
              <span className="text-red-500">🔴 Pending</span>
            ) : (
              ""
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;