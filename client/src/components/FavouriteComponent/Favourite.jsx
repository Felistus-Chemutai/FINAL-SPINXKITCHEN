import React from "react";
import { useState } from "react";
import "../FavouriteComponent/Favourite.css";

const Favourite = () => {
  const [favourite, setFavourite] = useState(0);
  const rankings = [1, 2, 3, 4, 5];

  const handleRankingClick = (rank) => {
    if (favourite === rank) {
      setFavourite(0);
    } else {
      setFavourite(rank);
    }
  };

  return (
    <p className="favcomponent">
      {rankings.map((rank) => {
        return (
          <button
            className="favbutton"
            onClick={() => handleRankingClick(rank)}
          >
            {favourite >= rank ? "★" : "☆"}
          </button>
        );
      })}
    </p>
  );
};

export default Favourite;
