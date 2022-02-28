import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './dataMenuHome';

function MenuComponentHome() {

    const [menuItems , setMenuItems] = useState(items) ;

    const filterItems = (category) =>{

        if(category === "All"){
            setMenuItems(items);
            return;
        }

        const newItems = items.filter((item) => item.category===category)
        setMenuItems(newItems)
    }

    return (
        <>
        <main>
            <section className="section App">
                <div style={{marginTop:"3em"}}>

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

                    <h2 style={{paddingBottom:"1em"}}>menu season flowers</h2>

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

                    <Categories filterItems={filterItems}/>

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

                    <Menu items={menuItems}/>

                </div>
            </section>
        </main>
        </>
    )
}

export default MenuComponentHome;
