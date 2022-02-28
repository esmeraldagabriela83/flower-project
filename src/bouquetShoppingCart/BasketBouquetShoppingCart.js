import React from "react";




function BasketBouquetShoppingCart(props){

    const {cartItems , onAdd , onRemove}=props ;
    {/*a = acumulator , c = current item*/}

    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.3;
    const shippingPrice = itemsPrice > 3000 ? 0 : 150;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return(
        <>
            <aside style={{alignItems:"center" , marginTop:"1.5em"}}>
                <h3>cart items</h3>
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

                <div>
                    {cartItems.length === 0 && <div>Cart is empty</div>}
                </div>

                {cartItems.map((item) =>(
                    <div key={item.id}>
                        {/*<img src={item.imageBouquet} alt={item.id}*/}
                        {/*     style={{height:"13em" , width:"10em"}}/>*/}
                        <h3>{item.name}</h3>

                        <div>
                            <button onClick={() => onAdd(item)} className="add">
                                <p style={{ fontSize:"1em" , marginLeft:"0.5em" , marginTop:"1em"}}>+</p>
                            </button>
                            <button onClick={() => onRemove(item)} className="remove">
                                <p style={{ fontSize:"1em" , marginLeft:"0.5em" , marginTop:"1em"}}>-</p>
                            </button>
                        </div>

                        <h3>
                            {item.qty} x $ {item.price.toFixed(2)}
                        </h3>

                    </div>
                ))}

                {cartItems.length !== 0 && (
                    <>
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

                        <div>
                            <h3>Items Price</h3>
                            <h4>$ {itemsPrice.toFixed(2)}</h4>
                        </div>
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

                        <div>
                            <h3>Tax Price</h3>
                            <h4>$ {taxPrice.toFixed(2)}</h4>
                        </div>
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

                        <div >
                            <h3>Shipping Price</h3>
                            <h4>
                                $ {shippingPrice.toFixed(2)}
                            </h4>
                        </div>

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


                        <div>
                            <h3>
                                <strong>Total Price</strong>
                            </h3>
                            <h4>
                                <strong>$ {totalPrice.toFixed(2)}</strong>
                            </h4>
                        </div>

                    </>
                )}

            </aside>
        </>
    )
}


export default BasketBouquetShoppingCart ;

