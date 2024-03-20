import React from "react";
import "../RecipeComponent/RecipeIndex.css";

const RecipeIndex = ({ alphaIndex }) => {
  const alpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  
  return (
    <>
      {alpha.map((item, index) => {
        return (
          <div
            className="alphabox" 
            
            onClick={() => alphaIndex(item)}
            key={index}

          >
            <div></div>
            <h3>{item}</h3>
          </div>
        );
      })}
    </>
  );
};

export default RecipeIndex;
