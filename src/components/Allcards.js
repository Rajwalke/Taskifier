
const Allcards=({data,result1})=>{

    return(
        <div className="text-1xl text-center">
            <button className="my-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={(()=>{
                    const filterAllCard=data.map((card)=> {
                        return card;
                    })
            result1(filterAllCard);
            }
        )}
         >
            All Task 
         </button>
        </div>

    )
}

export default Allcards;