import React from 'react';

import "../App.css";



const LinkHomePageAtom = () => {

    return (
        <>
            <div>
            <div className="ul-ion-icon-com" style={{marginTop:"0.05em"}}>

                    <ul className="menu ">
                        <li><a href="#springHomePage">Spring</a></li>
                        <li><a href="#summerHomePage">Summer</a></li>
                        <li><a href="#autumnHomePage">Autumn</a></li>
                    </ul>

                <div>

                <section id="springHomePage" className="homeSection section">
                    <div className="pageSeasonImage">
                        <img src="https://images.unsplash.com/photo-1586952205040-22514ffab1a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=612&q=80"
                             className="shadow"
                             alt="springPage" />
                    </div>
                    <div className="pageSeasonInfo">
                        <span></span>
                        <h3>Spring</h3>
                        <span></span>
                        <ul>
                            <li>
                                <p>
                                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                                    It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                </p>
                            </li>
                            <li>
                                <p>
                                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                    dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </li>
                        </ul>
                    </div>
                </section>

                    <hr className="hrMobile"></hr>

                    <div style={{display:"flex" , alignItems:"center" , justifyContent:"center"}}>
                        <h1 className="hrScreenFlower leftFlower">
                            <ion-icon name="flower-sharp"></ion-icon>
                        </h1>
                        <div className="hrScreen"></div>
                        <h1 className="hrScreenFlower rightFlower">
                            <ion-icon name="flower-sharp"></ion-icon>
                        </h1>
                    </div>

                    <section id="summerHomePage" className="homeSection section">
                        <div className="pageSeasonImage">
                            <img src="https://images.unsplash.com/photo-1530092285049-1c42085fd395?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                 className="shadow"
                                 alt="summerPage" />
                        </div>
                        <div className="pageSeasonInfo">
                            <span></span>
                            <h3>Summer</h3>
                            <span></span>
                            <ul>
                                <li>
                                    <p>
                                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                                        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <hr className="hrMobile"></hr>

                    <div style={{display:"flex" , alignItems:"center" , justifyContent:"center"}}>
                        <h1 className="hrScreenFlower leftFlower">
                            <ion-icon name="flower-sharp"></ion-icon>
                        </h1>
                        <div className="hrScreen"></div>
                        <h1 className="hrScreenFlower rightFlower">
                            <ion-icon name="flower-sharp"></ion-icon>
                        </h1>
                    </div>

                    <section id="autumnHomePage" className="homeSection section">
                        <div className="pageSeasonImage">
                            <img src="https://images.unsplash.com/photo-1487139975590-b4f1dce9b035?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                                 className="shadow"
                                 alt="autumnPage" />
                        </div>
                        <div className="pageSeasonInfo">
                            <span></span>
                            <h3>Autumn</h3>
                            <span></span>
                            <ul>
                                <li>
                                    <p>
                                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                                        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </section>

                </div>
            </div>
            </div>
        </>
    );
};

export default LinkHomePageAtom ;
