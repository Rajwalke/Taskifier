const Allcards = ({ data, result1 }) => {
    return (
      <div className="text-center">
        <button
          className="bg-navy-700 text-white px-4 py-2 rounded-lg hover:bg-navy-800 transition-colors duration-300"
          onClick={() => {
            const filterAllCard = data.map((card) => card);
            result1(filterAllCard);
          }}
        >
          All Tasks
        </button>
      </div>
    );
  };
  
  export default Allcards;