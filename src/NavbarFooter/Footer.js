import React from 'react'
import oneFlower from "../images/flowerOne.png";
import myFlower from "../images/springForestFlower.png";
import twoFlower from "../images/flowerTwo.png";
import {Sources} from "../source/sources";



const Footer = () => {
    return (
        <>
            <nav>
                <div className="spring">
                    <img src={oneFlower} className="App-flower" alt="flower one" />
                    <img src={myFlower} className="App-flower" alt="spring forest flower" />
                    <img src={twoFlower} className="App-flower" alt="flower two" />
                </div>

                <div className="nav-center">
                    <div className="nav-header">
                        <ul className="ul-ion-icon-com">
                            <li style={{margin:"1.5em"}}>
                                <h1>
                                    <ion-icon name="logo-twitter"></ion-icon>
                                </h1>
                                <a href="https://www.twitter.com" className="linkFooter" target="_blank">
                                     https://www.twitter.com
                                </a>
                            </li>

                            <li style={{margin:"1.5em"}}>
                                <h1>
                                    <ion-icon name="logo-facebook"></ion-icon>
                                </h1>
                                <a href="https://www.facebook.com/" className="linkFooter" target="_blank">
                                    https://www.facebook.com/
                                </a>
                            </li>

                            <li style={{margin:"1.5em"}}>
                                <h1>
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </h1>
                                <a href="https://www.instagram.com/" className="linkFooter" target="_blank">
                                    https://www.instagram.com/
                                </a>
                            </li>

                           <li style={{margin:"1.5em"}}>
                               <h1>
                                   <ion-icon name="logo-linkedin"></ion-icon>
                               </h1>
                               <a href="https://www.linkedin.com" className="linkFooter" target="_blank">
                                   https://www.linkedin.com
                               </a>
                           </li>
                        </ul>

                    </div>
                </div>
            </nav>
               <div style={{paddingTop:"3em" , paddingBottom:"3em"}}>
                   <small>&copy; Copyright Reserved</small>
               </div>

            <Sources/>

        </>
    )
}

export default Footer;




