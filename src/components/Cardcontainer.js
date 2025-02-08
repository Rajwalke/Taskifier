import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/Cardslice";
import TaskPopup from "./TaskPopup";
import Addcontentpopup from "./Addcontentpopup";

const Cardcontainer = ({ close }) => {
  const [heading, setheading] = useState("");
  const [description, setdescription] = useState("");
  const [check, setcheck] = useState(false);
  const [checkempty, setemptycheck] = useState(false);
  const dispatchItem = useDispatch();

  const checkdata = () => {
    dispatchItem(
      addItem({
        header: heading,
        descriptioninfo: description,
        Pending: true,
        done: false,
        inprogress: false,
      })
    );
    setcheck(true);
    setTimeout(() => {
      setcheck(false);
    }, 3000);
    setheading("");
    setdescription("");
  };

  const Addpopup = () => {
    setemptycheck(true);
    setTimeout(() => {
      setemptycheck(false);
    }, 3000);
  };

  return (
    <>
      {check && <TaskPopup />}
      {checkempty && <Addcontentpopup />}
      <div className="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-8 transform transition-all duration-300 hover:scale-105">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Add New Task
          </h2>

          {/* Heading Input */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Heading
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out hover:border-blue-400"
              placeholder="Enter heading"
              value={heading}
              onChange={(e) => setheading(e.target.value)}
            />
          </div>

          {/* Description Textarea */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Description
            </label>
            <textarea
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out hover:border-blue-400"
              placeholder="Enter description"
              rows="4"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-200 ease-in-out"
              onClick={close}
            >
              Cancel
            </button>
            <button
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out"
              onClick={() => {
                if (heading !== "" && description !== "") {
                  checkdata();
                } else {
                  Addpopup();
                }
              }}
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardcontainer;