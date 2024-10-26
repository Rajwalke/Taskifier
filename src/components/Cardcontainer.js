import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/Cardslice";
import TaskPopup from "./TaskPopup";
import Addcontentpopup from "./Addcontentpopup";
import { Pending } from "@mui/icons-material";
const Cardcontainer=({close})=>{
    const [heading,setheading]=useState('');
    const [description,setdescription]=useState('');
    const [check,setcheck]=useState(false);
    const [checkempty,setemptycheck]=useState(false);
    const dispatchItem=useDispatch();

    const checkdata=()=>{
      
      dispatchItem(addItem({
        header:heading,
        descriptioninfo:description,
        Pending:true,
        done:false,
        inprogress:false,
      }))
        setcheck(true);   
      
      setTimeout(() => {
        setcheck(false);
      }, 3000);
      setheading('');
      setdescription('');
    }
    const Addpopup=()=>{
      setemptycheck(true);
      setTimeout(() => {
        setemptycheck(false);
      }, 3000);
    }
    return(
    <>
        {check && <TaskPopup />}
        {checkempty && <Addcontentpopup />}
        <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center">
        
        <div className="bg-white rounded-lg shadow-lg w-96 p-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Add New Task</h2>
      
          <div className="mb-5">
            <label className="block text-gray-700 text-sm mb-2 font-medium">Heading</label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200 ease-in-out hover:border-blue-400"
              placeholder="Enter heading"
              value={heading}
              onChange={(e) => setheading(e.target.value)}
            />
          </div>
      
          <div className="mb-5">
            <label className="block text-gray-700 text-sm mb-2 font-medium">Description</label>
            <textarea
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200 ease-in-out hover:border-blue-400"
              placeholder="Enter description"
              rows="4"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
            />
          </div>
      
          <div className="flex justify-end space-x-3">
            <button
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-200 ease-in-out"
              onClick={close}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out"
              onClick={()=>{
                if(heading!='' && description!=''){
                  checkdata()
                }
                else{
                  Addpopup();
                }
              }}
            >
              Add
            </button>
            
          </div>
        </div>

      </div>

      </>
    )
}
export default Cardcontainer;