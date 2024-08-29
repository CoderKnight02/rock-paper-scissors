import "./Footer.css";
import rules from "../../images/image-rules-bonus.svg";
import close from "../../images/icon-close.svg";

import React, { useState } from "react";

function Footer() {
  const [togglePopup, setTogglePopup] = useState(false);

  return (
    <footer className="footer">
      {togglePopup && (
        <div className="popup">
          <div className="popup-content">
            <header className="popup-header">
              <h2>Rules</h2>
              <button onClick={() => setTogglePopup(false)}>
                <img src={close} alt="close"></img>
              </button>
            </header>
            <img src={rules} alt="Rules of the Game"></img>
          </div>
        </div>
      )}

      <button onClick={() => setTogglePopup(true)}>Rules</button>
    </footer>
  );
}

export default Footer;
