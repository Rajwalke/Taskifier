import { useState } from "react";
import { useDispatch } from "react-redux";
import { deletItem, doneItem, inprogessItem, pendingItem, headingItem } from "../utils/Cardslice";
import DeletePopup from "./DeletePopup";
import Editpopup from "./Editpopup";

const CardPopupContainer = ({ data, close, keyindex }) => {
  const [check, setcheck] = useState(false);
  const [check1, setcheck1] = useState(false);
  const [donestatus, setdonestatus] = useState(false);
  const [inprogresstate, setinprogress] = useState(false);
  const [pendingstate, setpending] = useState(true);

  const [headingstate, setheadingstate] = useState(data?.header);
  const [descriptionsatet, setdescriptionstate] = useState(data?.descriptioninfo);
  const dispatch = useDispatch();

  const deletePop = () => {
    setcheck(true);
    setTimeout(() => {
      setcheck(false);
      close();
    }, 1500);
  };

  const eidtPop = () => {
    setcheck1(true);
    setTimeout(() => {
      setcheck1(false);
    }, 2000);
  };

  return (
    <>
      {check && <DeletePopup />}
      {check1 && <Editpopup />}
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg p-6 mx-4">
          <div className="flex flex-col justify-between h-full">
            {/* Header and Description */}
            <div className="flex-1 mb-6">
              {/* Heading Input */}
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-semibold mb-2">Heading</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out hover:border-blue-400"
                  placeholder="Enter heading"
                  value={headingstate}
                  onChange={(e) => setheadingstate(e.target.value)}
                />
              </div>

              {/* Description Textarea */}
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-semibold mb-2">Description</label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out hover:border-blue-400"
                  placeholder="Enter description"
                  rows="4"
                  value={descriptionsatet}
                  onChange={(e) => setdescriptionstate(e.target.value)}
                />
              </div>

              {/* Task Status */}
              <div className="mb-6">
                <p className="text-lg font-semibold mb-2">
                  {donestatus ? (
                    <span className="text-green-600">✅ Your Task is Completed</span>
                  ) : inprogresstate ? (
                    <span className="text-yellow-600">🟡 Your Task is in Progress. Complete ASAP.</span>
                  ) : pendingstate ? (
                    <span className="text-red-600">🔴 Your Task is Pending</span>
                  ) : (
                    ""
                  )}
                </p>
                <p className="text-sm text-gray-500">
                  Use the dropdown below to update the status of your task.
                </p>
              </div>

              {/* Status Dropdown */}
              <div className="mb-6">
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out hover:border-blue-400"
                  onChange={(e) => {
                    if (e.target.value === "done") {
                      dispatch(doneItem(keyindex));
                      setdonestatus(true);
                      setinprogress(false);
                      setpending(false);
                    } else if (e.target.value === "inprogress") {
                      dispatch(inprogessItem(keyindex));
                      setinprogress(true);
                      setdonestatus(false);
                      setpending(false);
                    } else if (e.target.value === "pending") {
                      dispatch(pendingItem(keyindex));
                      setpending(true);
                      setinprogress(false);
                      setdonestatus(false);
                    }
                  }}
                >
                  <option value="done" className="text-green-600">Done</option>
                  <option value="inprogress" className="text-yellow-600">In Progress</option>
                  <option value="pending" className="text-red-600">Pending</option>
                </select>
              </div>
            </div>

            {/* Edit, Delete, Cancel Buttons */}
            <div className="flex justify-end space-x-4">
              <button
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out"
                onClick={() => {
                  dispatch(headingItem({ keyindex, headingstate, descriptionsatet }));
                  eidtPop();
                }}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-200 ease-in-out"
                onClick={() => {
                  dispatch(deletItem(keyindex));
                  deletePop();
                }}
              >
                Delete
              </button>
              <button
                className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition duration-200 ease-in-out"
                onClick={close}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPopupContainer;