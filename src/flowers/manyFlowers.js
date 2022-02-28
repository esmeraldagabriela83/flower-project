import React, { useState } from 'react';
import { beautifulDataFlower } from './dataFlower';
import { Link } from 'react-router-dom';
import "../App.css";






const ManyFlowers = () => {
    const [flowerPlant, setFlowerPlant] = useState(beautifulDataFlower);



    return (
        <>
            <div className="section ul-ion-icon-com">

            {flowerPlant.map((eachSingleFlower) => {
                return (
                    <div key={eachSingleFlower.id} className="App">

                        <div style={{alignItems:"center"}}>
                            <img
                                className="loading shadow"
                                src={eachSingleFlower.image} alt={eachSingleFlower.id}/>
                        </div>

                        <h4>{eachSingleFlower.name}</h4>

                        <div style={{alignItems:"center"}}>
                            <Link to={`/eachAboutFlower/${eachSingleFlower.id}`}>
                                <button> Bouquet details </button>
                            </Link>
                        </div>
                    </div>
                );
            })}
            </div>
        </>
    );
};

export default ManyFlowers;
