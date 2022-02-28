import React from "react";




function HeaderBouquetShoppingCart(props){

    const {countCartItems}=props ;

    return(
        <>
            <header>
                <div>
                    <a href = "#/">
                    {/*<h3>shopping cart</h3>*/}
                        <h1 style={{marginTop:"1em"}}>
                            <ion-icon name="cart"></ion-icon>
                        </h1>
                    </a>
                </div>

                <div>
                    <a href = "#/cart" style={{display:"flex"}}>
                        <h3>cart</h3>
                        <div>{" "}{countCartItems ? (<h3>{countCartItems}</h3>) : (" ")}</div>
                    </a>
                </div>
            </header>
        </>
    )
}


export default HeaderBouquetShoppingCart ;


