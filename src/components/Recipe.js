import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients } = recipe.recipe;

  return (
    <div className=" container recipe image-container d-flex justify-content-start m-3">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <button className=" btn  mb-2 mt-2 btn-sm">
        <a href={url} target="_blank" rel="noopener noreferrer">
          Know More
        </a>
      </button>
      <button className=" btn  mb-2 btn-sm" onClick={() => setShow(!show)}>Ingredients</button>
      {show && <RecipeDetails ingredients={ingredients} />}
    </div>
  );
};

export default Recipe;
