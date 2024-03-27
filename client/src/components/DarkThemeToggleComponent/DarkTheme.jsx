import React from "react";
import { useEffect, useState } from "react";
import { colorChange, originalTheme } from "./DarkThemToggle.js";
import SunTheme from "./SunTheme.jsx";
import MoonTheme from "./MoonTheme.jsx";
import "./DarkTheme.css";

const DarkTheme = () => {
  const [state, setState] = useState(true);

  useEffect(() => {
    originalTheme().then((theme) => {
      setState(state === "dark");
    });
  }, []);
  const handleClick = () => {
    const theme = !state ? "dark" : "light";
    colorChange(theme).then(() => {
      setState(theme === "dark");
    });
  };
  return (
    <>
      <button className="dark-theme" onClick={handleClick}>
        {state ? (
          <SunTheme width={20} height={20} />
        ) : (
          <MoonTheme width={20} height={20} />
        )}
      </button>
    </>
  );
};

export default DarkTheme;
