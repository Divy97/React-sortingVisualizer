// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";

import React from "react";
import "./Visuals.css";

const Visuals = () => {
  // const myState = useSelector((state) => state.actions);
  // const dispatch = useDispatch();
  // const color = myState.color;
  // const range = myState.range;

  // console.log("COLOR", color);
  // //changes value by clicking on change value button
  // const changeValues = () => {
  //   let new_arr;
  // };
  return (
    <>
      <div className="visuals">
        <div className="visualizer">
          <div className="visual__items">
            <div
              className="visual__item"
              // key={item[1]}
              // id={item[1]}
              // style={{
              //   transition: `${speed / 1000}s linear all`,
              //   transform: `translateX(${item[1] * 11}px)`,
              // }}
            >
              <h4>12</h4>
              <div
                className="visual"
                style={{
                  height: "36px",
                  backgroundColor: "#000",
                  width: "8px",
                }}
              ></div>
            </div>
            <div
              className="visual__item"
              // key={item[1]}
              // id={item[1]}
              // style={{
              //   transition: `${speed / 1000}s linear all`,
              //   transform: `translateX(${item[1] * 11}px)`,
              // }}
            >
              <h4>12</h4>
              <div
                className="visual"
                style={{
                  height: "66px",
                  backgroundColor: "#000",
                  width: "8px",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="visual__btns">
          <button id="change-btn">change values</button>
          <button id="play-btn">play</button>
        </div>
      </div>
    </>
  );
};

export default Visuals;
