import React, { useState, useRef, useEffect } from 'react';
import {Link} from "react-router-dom";
import logoFlower from "./logoFlower.svg" ;

const Navbar = () => {

    const [showLinks , setShowLinks]=useState(false);
    const linksContainerRef=useRef(null);
    const linksRef=useRef(null);

    useEffect(() => {
        const linksHeight=linksRef.current.getBoundingClientRect().height

        if(showLinks){
            linksContainerRef.current.style.height =`${linksHeight}px`
        }else{
            linksContainerRef.current.style.height =`0px`
        }

    })

  return (
      <>
        <nav>
          <div className="nav-center">
                <div className="nav-header">
                    <div className="logo">
                       <div className="logoText">
                           <div className="word up">Project</div>
                           <div className="word down">Flower</div>
                       </div>
                        <img src={logoFlower} alt="logoFlower" className="svgFlowerLogo"/>
                    </div>
                    <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
                        <ion-icon name="menu-outline"></ion-icon>
                    </button>
                </div>

              <div className="links-container" ref={linksContainerRef}>
                  <ul className="links" ref={linksRef}>
                      <Link to="/">
                          <li>
                         <a href="#">home</a>
                      </li>
                      </Link>
                      <Link to="/about">
                          <li>
                              <a href="#">about</a>
                          </li>
                      </Link>

                      <Link to="/shop">
                          <li>
                              <a href="#">shop</a>
                          </li>
                      </Link>

                  </ul>
              </div>

          </div>
        </nav>
      </>
  )
}

export default Navbar;









