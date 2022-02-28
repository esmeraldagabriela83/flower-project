import React from "react";
import "../App.css";
import HeaderBouquetShoppingCart from "./HeaderBouquetSC";
import MainBouquetShoppingCart from "./MainBoutiqueShoppingCart";
import BasketBouquetShoppingCart from "./BasketBouquetShoppingCart";
import data from "./shoppingCartData";
import {useState} from "react";


function BouquetShoppingCart(){

const {productsBouquets}=data;
const [cartItems , setCartItems]=useState([]) ;

    const onAdd = (productEachBouquet) => {
        const exist = cartItems.find((x) => x.id === productEachBouquet.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === productEachBouquet.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...productEachBouquet, qty: 1 }]);
        }
    };


    const onRemove = (productEachBouquet) => {
        const exist = cartItems.find((x) => x.id === productEachBouquet.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== productEachBouquet.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === productEachBouquet.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    };


    return(
        <>
            <HeaderBouquetShoppingCart countCartItems = {cartItems.length}/>
         <div className="shoppingComponents">
             <div>
                 <MainBouquetShoppingCart productsBouquets={productsBouquets} onAdd={onAdd}/>
             </div>
             <div>
                 <BasketBouquetShoppingCart   cartItems={cartItems}
                                              onAdd={onAdd}
                                              onRemove={onRemove}/>
             </div>
         </div>
        </>
    )
}


export default BouquetShoppingCart ;


