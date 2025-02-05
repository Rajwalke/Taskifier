import { useState } from "react";
import { useDispatch } from "react-redux";
import { deletItem, doneItem, inprogessItem, pendingItem, headingItem} from "../utils/Cardslice";
import DeletePopup from "./DeletePopup";
import Editpopup from "./Editpopup";

const CardPopupContainer = ({ data, close, keyindex }) => {
    const [check, setcheck] = useState(false)
    const [check1, setcheck1] = useState(false)
    const [donestatus, setdonestatus] = useState(false);
    const [inprogresstate, setinprogress] = useState(false);
    const [pendingstate, setpending] = useState(true);

    const [headingstate,setheadingstate]=useState(data?.header);
    const [descriptionsatet,setdescriptionstate]=useState(data?.descriptioninfo);
    const dispatch = useDispatch();

    const deletePop = () => {
        setcheck(true);
        setTimeout(() => {
            setcheck(false);
            close();
        }, 1500);
    };
    const eidtPop=()=>{
        setcheck1(true);
        console.log("edit button")
        setTimeout(() => {
            setcheck1(false);
        }, 2000);
    };
    console.log(headingstate);
    console.log(descriptionsatet)

    return (
        <>

        {check && <DeletePopup />}
        {check1 && <Editpopup />}
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                <div className="bg-white rounded-lg shadow-lg w-full max-w-lg md:max-w-3xl lg:max-w-2xl p-6 mx-4 sm:mx-6 md:mx-8">
                    <div className="flex flex-col justify-between h-full">
                        {/* Header and Description */}
                        <div className="flex-1 mb-4">
                            <div className="mb-5">
                                <label className="block text-gray-700 text-sm mb-2 font-medium">Heading</label>
                                <input
                                  type="text"
                                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200 ease-in-out hover:border-blue-400"
                                  placeholder={headingstate}
                                  value={headingstate}
                                  onChange={(e) => setheadingstate(e.target.value)}
                                />
                              </div>

                              <div className="mb-5">
                                <label className="block text-gray-700 text-sm mb-2 font-medium">Description</label>
                                <textarea
                                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200 ease-in-out hover:border-blue-400"
                                  placeholder="Enter description"
                                  rows="4"
                                  value={descriptionsatet}
                                  onChange={(e) => setdescriptionstate(e.target.value)}
                                />
                              </div>




                            {/* ########################################### */}
                            {/* <h2 className="text-2xl font-bold mb-2">{data.header}</h2> */}

                            {/* <p className="text-gray-700 mb-4">{data.descriptioninfo}</p> */}

                            {/* Task Status */}
                            <div className="mb-6">
                                <p className="text-lg font-semibold mb-2">
                                    {donestatus ? (
                                        <span>Your Task is Completed</span>
                                    ) : inprogresstate ? (
                                        <span>Your Task is in Progress. Complete ASAP.</span>
                                    ) : pendingstate ? (
                                        <span>Your Task is Pending</span>
                                    ) : (
                                        ""
                                    )}
                                </p>
                                <p className="text-sm text-gray-500">
                                    Use the buttons below to update the status of your task.
                                </p>
                            </div>

                            {/* Buttons */}
                            <div>
                                <select 
                                className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2"
                                onChange={(e)=>{
                                    if(e.target.value=="done"){
                                        dispatch(doneItem(keyindex));
                                        setdonestatus(true);
                                        setinprogress(false);
                                        setpending(false);
                                    }
                                    else if(e.target.value=="inprogress"){
                                        dispatch(inprogessItem(keyindex));
                                        setinprogress(true);
                                        setdonestatus(false);
                                        setpending(false);
                                    }
                                    else if(e.target.value=="pending"){
                                        dispatch(pendingItem(keyindex));
                                        setpending(true);
                                        setinprogress(false);
                                        setdonestatus(false);
                                    }
                                    console.log(e.target.value);
                                }}>
                                    <option value="done" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 w-full sm:w-auto" >Done</option>
                                    <option value="inprogress" className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 w-full sm:w-auto">In Porgress</option>
                                    <option value="pending" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 w-full sm:w-auto">Pending</option>
                                </select>
                            </div>
                            {/* <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                                <button
                                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 w-full sm:w-auto"
                                    onClick={() => {
                                        dispatch(doneItem(keyindex));
                                        setdonestatus(true);
                                        setinprogress(false);
                                        setpending(false);
                                    }}
                                >
                                    Done
                                </button>
                                <button
                                    className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 w-full sm:w-auto"
                                    onClick={() => {
                                        dispatch(inprogessItem(keyindex));
                                        setinprogress(true);
                                        setdonestatus(false);
                                        setpending(false);
                                    }}
                                >
                                    In Progress
                                </button>
                                <button
                                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 w-full sm:w-auto"
                                    onClick={() => {
                                        dispatch(pendingItem(keyindex));
                                        setpending(true);
                                        setinprogress(false);
                                        setdonestatus(false);
                                    }}
                                >
                                    Pending
                                </button>
                            </div> */}
                        </div>

                        {/* Edit, Delete, Cancel Buttons */}
                        <div className="flex justify-end space-x-4 mt-6">
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                                onClick={()=>{
                                    // console.log("click Item sucessfully",keyindex);
                                    
                                    dispatch(headingItem({keyindex,headingstate,descriptionsatet}))
                                    eidtPop();
                                    // deletePop();
                                }}
                                
                            >
                                Edit
                            </button>
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                                onClick={() => {
                                    console.log("click delete")
                                    dispatch(deletItem(keyindex));
                                    deletePop();
                                }}
                            >
                                Delete
                            </button>
                            <button
                                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
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
