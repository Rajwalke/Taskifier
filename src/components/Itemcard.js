import { useState } from "react";


const ItemCard = ({ data,onClickData}) => {
 
  // console.log("data in card",data.inprogress);

  return (
    <div
      className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
    >
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      onClick={onClickData}
      >
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Heading</h2>
          <p className="text-gray-600 mb-4">{data.header}</p>
          <h3 className="text-lg font-medium text-gray-700">Task</h3>
          <p className="text-gray-600">{data.descriptioninfo}</p>
          <p>
            {data.inprogress === true ? 
              <span>🟡 In Progress</span>
             : data.done === true ? 
              <span>🟢 Done</span>
             : data.Pending === true ?
              <span>🔴 Pending</span> : ""
            }
          </p>
        </div>
      </div>




            {/*####### Extra Part delete  */}
      {/* Conditionally render the Cardpopup based on the state */}
      {/* {checkItem === "1" && (
        <Cardpopup
          data={data}
          onclose={() => {
            console.log("Closing popup...");
            // this bug is happended beacuse you click on whole card and when you click on cancel it will be consider as inside the itemcard means itemcard is parent of cardPopup
            // setCheckItem("0");  // This should update the state and close the popup
            console.log("setchekitem",checkItem)
          }}
        />
      )} */}
    </div>
  );
};

export default ItemCard;
