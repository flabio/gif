import React, { useState } from "react";
import AddCategory from "./AddCategory";
import {GifGrid} from './GifGrid';


const GitExpertApp = (props) => {
  const [categories, setCategories] = useState(['goku']);

  return (
    <>
      <h2>Git Expert App</h2>
         <AddCategory setCategories={setCategories} ></AddCategory>
      <hr />
      
      <ol>
        {
        categories.map((category) => (
          <GifGrid key={category}  category={category} />
        ))
        }
      </ol>
    </>
  );
};



export default GitExpertApp;
