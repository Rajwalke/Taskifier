import { useState } from "react"
import Notfoundpopup from "./Notfoundpopup";

const Searchbar=({data,result1})=>{
    const [text,settext]=useState("");
    const [check,setcheck]=useState(false)
    // const [searchResult,setsearchResult]=useState(null);
    const  notfoundpopup=()=>{
        setcheck(true);
        setTimeout(() => {
            setcheck(false);
        }, 2000);
    }
    return(
        <>
        {check && <Notfoundpopup />}
        <div className="text-1xl text-center">
            <input className=" p-2 mx-3 my-3 border-2 border-black" type="text" placeholder="Enter the Heading of the Task" value={text} onChange={(e)=>settext(e.target.value)}/>
            <button className="mx-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={()=>{
                settext(text);
                const filtercard=data.filter((card)=>{
                    return card.header.toLowerCase().includes(text.toLowerCase());
                })
                if(filtercard.length === 0){
                    // alert("Not found")
                    notfoundpopup();
                    settext("");
                }
                else{
                    result1(filtercard);
                }
                console.log(filtercard)
                console.log(text);
                // setsearchResult(filtercard)
               
            }
           
        }
            >Search</button>
        </div>
        </>
    )
    

}
export default Searchbar;