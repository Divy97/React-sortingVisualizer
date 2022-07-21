import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="header">
        <div id="header__bar">
          <h3 className="header__bar__title">By Divy Parekh</h3>
          <div className="header__bar__icons">
            <a href="https://www.instagram.com/dasharath_116/" target="_blank">
              <img src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png" />
            </a>
            <a href="https://github.com/Dasharath9920" target="_blank">
              <img src="https://img.icons8.com/ios/50/000000/github--v1.png" />
            </a>
            <a
              href="https://www.linkedin.com/in/dyavari-dasharath-b767021b3/"
              target="_blank"
            >
              <img src="https://img.icons8.com/ios/50/000000/linkedin.png" />
            </a>
          </div>
        </div>

        <div className="header-logo">Sorting-UI</div>
      </div>
    </>
  );
};

export default Header;
