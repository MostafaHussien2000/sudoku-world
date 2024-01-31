import React from "react";

/* Import React Icons
===================== */
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

function Popup({ popUpType, show }) {
  const DiplayedPopUp = popUpType == 0 ? EnterGamePopUp : null;
  return (
    <div id="popup-wrapper">
      <div id="popup-box">
        <button id="close-popup" onClick={() => show(false)}>
          <IoClose />
        </button>
        <DiplayedPopUp />
      </div>
    </div>
  );
}

export default Popup;

function EnterGamePopUp() {
  return (
    <div className="popup-box">
      <p>You will play now as a guest. This means your score won’t be saved.</p>
      <div className="btn-group">
        <Link to={"/signup"}>
          <button className="main-btn">Sign up</button>
        </Link>
        <Link to={"/game-board"}>
          <button className="sec-btn">Continue as guest</button>
        </Link>
      </div>
    </div>
  );
}
