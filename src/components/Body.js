import { useState } from "react";
import Cardcontainer from "./Cardcontainer";
import { useSelector } from "react-redux";
import Itemcard from "./Itemcard";
import About from "./About";
import CardPopupContainer from "./cardPopupContainer";
//mistake agaye tho c capital hai cardPopup ka.abhi nahi horaha rahi
const Body=()=>{
    const [checkPOp,setcheckPop]=useState(false);
    const [cardData,setcardData]=useState(null);
    const [cardPopupstate,setcardPopupstate]=useState(false);
    const cardinfo=useSelector((store)=>store.carddata.items);
    const [keystate,setkeystate]=useState(0);
    // console.log(cardData);
    // console.log(cardPopupstate);

    console.log("All Cards info",cardinfo)

    return(
        <div>
            <div className="flex flex-wrap" >
                {
                    cardinfo.map((data,index)=>(
                        <Itemcard key={index} data={data}
                        onClickData={()=>{
                            setcardPopupstate(true);
                            setcardData(data);
                            setkeystate(index);
                        }}
                        />
                    ))
                }
            </div>
            
            <button className="bg-yellow-500 text-5xl text-black px-2 py-2 rounded-2xl font-extrabold right-5 fixed bottom-9 hover:text-6xl"
            onClick={()=>{
                // if(checkPOp===false){
                    setcheckPop(true);
                // }
                // else{
                //     setcheckPop(false);
                // }
            }}>+</button>
            <div>
                {checkPOp && <Cardcontainer close={()=>setcheckPop(false)}/>}
                {cardPopupstate && <CardPopupContainer data={cardData} close={()=>{setcardPopupstate(false)}} keyindex={keystate}/>}
            </div>
            
        </div>
    )
}
export default Body;