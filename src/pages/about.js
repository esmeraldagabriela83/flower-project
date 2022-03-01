import React from "react";
import ManyFlowers from "../flowers/manyFlowers";
import "../App.css";

function About(){
    return (
        <>
            <div className="section">
                <h3 style={{marginTop : "1.5em" , marginBottom:"0.5em"}} id="aboutPageH3">
                    <strong>Bouquets of flowers</strong>
                </h3>
            <ManyFlowers/>
            </div>
        </>
    )

}
export default About ;



