import React from 'react';

const Menu = ({items}) => {
    return (
        <>
          <div className="section App">
              {items.map((menuItem) =>{
                  const {id , title , img , price , desc} = menuItem ;
                  return (
                      <>
                      <article key={id}>
                          <img src={img} alt={title} className="shadow"/>
                          <div>
                              <header>
                                  <h4>{title}</h4>
                                  <h4>${price}</h4>
                              </header>
                              <p>{desc}</p>
                          </div>
                      </article>
                      </>
                  )
              })}
          </div>
        </>
    )
};

export default Menu;
