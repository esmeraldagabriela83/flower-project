import React from 'react';
import {BrowserRouter , Route ,Routes } from "react-router-dom";
import './App.css';
import Navbar from "./NavbarFooter/Navbar";
import Footer from "./NavbarFooter/Footer";
import "./NavbarFooter/index.css";
import Home from "./pages/home";
import About from "./pages/about";
import Shop from "./pages/shop";
import NotFound from "./pages/notFound";
import EachFlower from "./flowers/eachFlower";



function App() {
    console.log("verificare consola project flower");
  return (
      <>
      <div className="App">

          <BrowserRouter>
              <Navbar/>
              <Routes>
                  <Route path={"/"}  element={<Home/>}/>
                  <Route path={"/about"} element={<About/>}/>
                  <Route path={"/shop"} exact element={<Shop/>}/>
                  <Route path={"*"} element={<NotFound/>}/>
                  <Route path="/eachAboutFlower/:id" element={<EachFlower/>}/>
                  {/*<Route path={"/shop/:id"} element={<Item/>}/>*/}
              </Routes>

              <Footer/>
          </BrowserRouter>

      </div>
      </>
  );
}

export default App;





