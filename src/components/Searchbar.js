import { useState } from "react";
import Notfoundpopup from "./Notfoundpopup";

const Searchbar = ({ data, result1 }) => {
  const [text, settext] = useState("");
  const [check, setcheck] = useState(false);

  const notfoundpopup = () => {
    setcheck(true);
    setTimeout(() => {
      setcheck(false);
    }, 2000);
  };

  return (
    <>
      {check && <Notfoundpopup />}
      <div className="flex items-center justify-center gap-2">
        <input
          className="p-2 border-2 border-navy-700 rounded-lg focus:outline-none focus:border-gold-500 transition-colors duration-300"
          type="text"
          placeholder="Enter the Heading of the Task"
          value={text}
          onChange={(e) => settext(e.target.value)}
        />
        <button
          className="bg-navy-700 text-white px-4 py-2 rounded-lg hover:bg-navy-800 transition-colors duration-300"
          onClick={() => {
            settext(text);
            const filtercard = data.filter((card) =>
              card.header.toLowerCase().includes(text.toLowerCase())
            );
            if (filtercard.length === 0) {
              notfoundpopup();
              settext("");
            } else {
              result1(filtercard);
            }
          }}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default Searchbar;