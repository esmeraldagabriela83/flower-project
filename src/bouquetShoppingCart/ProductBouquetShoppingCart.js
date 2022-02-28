import React from "react";

function ProductBouquetSC(props){
    const {productEachBouquet , onAdd}=props ;
    return(
        <>
        <div className="App" style={{padding:"1em"}}>

                 <img src={productEachBouquet.imageBouquet} alt={productEachBouquet.name} className="shadow"
                      style={{height:"13em" , width:"10em"}}/>
                 <h3 style={{marginTop:"1.3em"}}>{productEachBouquet.name}</h3>
                 <div>
                     <h3> $ {productEachBouquet.price}</h3>
                 </div>

                 <div>
                     <button onClick={() => onAdd(productEachBouquet)}>Add to Cart</button>
                 </div>

        </div>
        </>
    )
}
export default ProductBouquetSC;


