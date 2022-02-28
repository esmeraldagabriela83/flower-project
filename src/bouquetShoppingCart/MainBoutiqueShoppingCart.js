import React from "react";
import ProductBouquetSC from "./ProductBouquetShoppingCart";




function MainBouquetShoppingCart(props){

const {productsBouquets , onAdd}=props ;

    return(
        <>
            <main>
                <div className="section ul-ion-icon-com">
                    {productsBouquets.map((productEachBouquet) =>{
                        return <ProductBouquetSC key={productEachBouquet.id}
                                                 productEachBouquet={productEachBouquet}
                                                 onAdd={onAdd}></ProductBouquetSC>
                    })}
                </div>
            </main>
        </>
    )
}


export default MainBouquetShoppingCart ;

