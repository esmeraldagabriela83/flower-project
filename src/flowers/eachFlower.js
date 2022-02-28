import React, { useState, useEffect } from 'react';
import { beautifulDataFlower } from './dataFlower';
import { Link, useParams } from 'react-router-dom';



const EachFlower = () => {

    const [name , setName]=useState("default name");
    const [info , setInfo]=useState("default info");
    const [image , setImage]=useState("default string photoImage");

    const {id}=useParams();

    useEffect(()=>{
        const newFlower=beautifulDataFlower.find((flower) => flower.id === parseInt(id));
        setName(newFlower.name);
    } , []);

    useEffect(()=>{
        const newFlower=beautifulDataFlower.find((flower) => flower.id === parseInt(id));
        setInfo(newFlower.info);
    } , []);

    useEffect(()=>{
        const newFlower=beautifulDataFlower.find((flower) => flower.id === parseInt(id));
        setImage(newFlower.image);
    } , []);

    return (
        <div className="section spring">
           <div className="imageBouquetAbout">
               <img src={image} alt="name" className="eachFlowerImage shadow"/>
           </div>

                <h3 className="App">{name}</h3>

                <h5 className="App">{info}</h5>
                <Link to="/about" >
                    <button> Back </button>
                </Link>

        </div>
    );
};

export default EachFlower;












