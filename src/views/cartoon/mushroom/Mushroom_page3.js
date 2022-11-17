import React, {useState} from "react";
import "../bee/Bee_page1.css";
import "./Mushroom_page3.css";
import "../SkipBtn.css";

function setScreenSize() {
  let vh = window.innerHeight;
  let vw = window.innerWidth;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
}

function Mushroom_page3() {
  setScreenSize();
  return (
    <div className="bee_container">
      <div className="bee_background_wrap">
        <div id="mushroom_page3">
            <div id="mush3_passer" />
            <div id="mush3_missedu" />
            <div id="mush3_effect" />
            <div id="mush3_highfive1" />
            <div id="mush3_heart" />
            <div id="mush3_highfive2" />
        </div>
      </div>
      <div className="skipBtn inlineBlock"></div>
    </div>
  );
}
export default Mushroom_page3;