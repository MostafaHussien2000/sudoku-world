import React from "react";

/* Importing Icons
================== */
import { RiRobot2Line } from "react-icons/ri";
import { AiFillQuestionCircle } from "react-icons/ai";

function LandingPage() {
  const newGameHandler = 0;

  return (
    <main id="landing-page">
      <center id="hero-section">
        <header id="hero-header">
          <p>
            Wanna take it more seriously ?<span>Login</span>
          </p>
        </header>
        <p>Welcome to</p>
        <h1>Sudoku World!</h1>

        <div className="btn-group">
          <button className="main-btn">New Game</button>
          <button className="secondary-btn">
            <RiRobot2Line size={"40"} />
            Suduko <br />
            Solver
          </button>
          <button className="secondary-btn">
            <AiFillQuestionCircle size={"40"} />
            How to <br />
            play ?
          </button>
        </div>
      </center>
    </main>
  );
}

export default LandingPage;
