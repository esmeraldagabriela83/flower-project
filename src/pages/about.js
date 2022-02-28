import React from "react";
import ManyFlowers from "../flowers/manyFlowers";
import "../App.css";

function About(){
    return (
        <>
            <div className="section">
                <h3 style={{marginTop : "1.5em" , marginBottom:"0.5em"}}>Bouquets of flowers</h3>
            <ManyFlowers/>
            </div>
        </>
    )

}
export default About ;



