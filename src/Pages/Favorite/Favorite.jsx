import { useEffect, useState } from "react";
import PhoneCart from "../../Components/Phone/PhoneCart";



const Favorite = () => {
    
    const [favorite, setFavorite] = useState([]);

    const [noData, setNodata] = useState('');

    const [showAll, setShowAll] = useState(false);


    // const [addShowAll, setAddShowAll] = useState(4);

    useEffect(() =>{
        const favorites = JSON.parse(localStorage.getItem('favorites'));
        
        if(favorites){
            setFavorite(favorites)
        } else{
            setNodata('No data found');
        }

    },[])

    const handleDeleteFavorite = () => {
        localStorage.clear();
        setFavorite([]);
        setNodata('No data found');
    }

    // console.log(favorite);

    return (
        <div>
           {
            noData ? <p className="flex justify-center items-center mt-16">{noData}</p> : 

            <div>

              {favorite.length > 0 && <div className="mb-4 text-center">
                <button onClick={handleDeleteFavorite} className="btn btn-secondary text-white">Delete favorite</button>
              </div>}


                <div className="grid grid-cols-2 gap-5">
                    {
                        showAll ? favorite.map(phone => <PhoneCart key={phone.id} phone={phone}></PhoneCart>) :

                         favorite.slice(0,2).map(phone => <PhoneCart key={phone.id} phone={phone}></PhoneCart>)
                    }
                </div>


                {favorite.length > 2 && <div className="mt-5 text-center">
                <button onClick={() => setShowAll(!showAll)} className="btn btn-secondary text-white">{showAll ? 'Show less' : 'Show All'}</button>
                </div>}

            </div>
           }

            {/* <div className="mt-10 text-center">
                <button onClick={() => setAddShowAll(favorite.length)} className="btn btn-success">Show All</button>
            </div> */}
        </div>
    );
};

export default Favorite;