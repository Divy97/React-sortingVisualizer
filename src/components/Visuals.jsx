import React from "react";
import "./Visuals.css";
const Visuals = () => {
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
