import { useEffect, useState } from "react";
import Cardcontainer from "./Cardcontainer";
import { useSelector } from "react-redux";
import Itemcard from "./Itemcard";
import CardPopupContainer from "./CardPopupContainer";
import Searchbar from "./Searchbar";
import Allcards from "./Allcards";

const Body = () => {
  const [checkPOp, setcheckPop] = useState(false);
  const [cardData, setcardData] = useState(null);
  const [cardPopupstate, setcardPopupstate] = useState(false);
  const cardinfo = useSelector((store) => store.carddata.items);
  const [keystate, setkeystate] = useState(0);
  const [result, setresult] = useState([]);

  useEffect(() => {
    setresult(cardinfo);
  }, [cardinfo]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-navy-50 to-blue-50 p-6">
      {/* Searchbar and Allcards Section */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
        <Searchbar data={cardinfo} result1={(carddata) => setresult(carddata)} />
        <Allcards data={cardinfo} result1={(carddata) => setresult(carddata)} />
      </div>

      {/* Task Cards Grid */}
      <div className="flex flex-wrap gap-6 justify-center">
        {result.map((data, index) => (
          <Itemcard
            key={index}
            data={data}
            onClickData={() => {
              setcardPopupstate(true);
              setcardData(data);
              setkeystate(index);
            }}
          />
        ))}
      </div>

      {/* Floating Add Task Button */}
      <button
        className="fixed bottom-8 right-8 bg-gold-500 text-white text-4xl w-16 h-16 rounded-full shadow-lg hover:bg-gold-600 hover:shadow-xl transition-all duration-300 flex items-center justify-center"
        onClick={() => setcheckPop(true)}
      >
        +
      </button>

      {/* Popup Modals */}
      
      <div>
        {checkPOp && <Cardcontainer close={() => setcheckPop(false)} />}
        {cardPopupstate && (
          <CardPopupContainer
            data={cardData}
            close={() => setcardPopupstate(false)}
            keyindex={keystate}

          />
        )}
      </div>
    </div>
  );
};

export default Body;