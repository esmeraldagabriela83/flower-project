import React from 'react';

const Categories = ({filterItems}) => {
    return (
        <>
           <div className="section App">
               <div>
               <button onClick={() => filterItems("All")}>
                   All
               </button>
               </div>
               <div style={{paddingBottom:"3em"}}>
               <button onClick={() => filterItems("tree flower")}>
                   Tree Flowers
               </button>

               <button onClick={() => filterItems("grass flower")}>
                   Grass Flowers
               </button>

               <button onClick={() => filterItems("sky flower")}>
                   Sky Flowers
               </button>
               </div>
           </div>
        </>
    )
};

export default Categories;














