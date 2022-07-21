import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const handleAlgo = (algo) => {
    console.log("Handled", algo);
  };

  return (
    <div className="sidebar">
      <div className="sidebar__option">
        <label htmlFor="algo">Algorithm: </label>
        <select
          name="algo"
          id="algo"
          onChange={(e) => handleAlgo(e.target.value)}
        >
          <option value="bubble">Bubble Sort </option>
          <option value="merge">Merge Sort</option>
          <option value="insertion">Insertion Sort</option>
          <option value="selection">Selection Sort</option>
          <option value="quick">Quick Sort</option>
        </select>
      </div>
    </div>
  );
};

export default Sidebar;
