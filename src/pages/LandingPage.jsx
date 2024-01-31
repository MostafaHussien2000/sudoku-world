import React from "react";

/* Import React Hooks
===================== */
import { useState } from "react";

/* Importing Icons
================== */
import { RiRobot2Line } from "react-icons/ri";
import { AiFillQuestionCircle } from "react-icons/ai";

/* Importing React Router DOM
============================= */
import { Link } from "react-router-dom";

/* Importing Images
=================== */
import rows from "../assets/how-to-play-rows.png";
import cols from "../assets/how-to-play-cols.png";
import boxes from "../assets/how-to-play-boxes.png";
import Popup from "../components/Popup";

function LandingPage() {
  const newGameHandler = 0;

  const [popup, showPopup] = useState(false);

  return (
    <main id="landing-page">
      {popup ? <Popup show={showPopup} popUpType={0} /> : <></>}
      <center id="hero-section">
        <header id="hero-header">
          <p>
            Wanna take it more seriously ?<Link to="/login">Login</Link>
          </p>
        </header>
        <p>Welcome to</p>
        <h1>Sudoku World!</h1>

        <div className="btn-group">
          <button className="main-btn" onClick={() => showPopup(true)}>
            New Game
          </button>
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
      <section id="sudoku-info">
        <h1>About Sudoku</h1>
        <p>
          Sudoku is a logic-based, combinatorial number-placement puzzle. In
          classic Sudoku, the objective is to fill a 9 × 9 grid with digits so
          that each column, each row, and each of the nine 3 × 3 subgrids that
          compose the grid contains all of the digits from 1 to 9. The puzzle
          setter provides a partially completed grid, which for a well-posed
          puzzle has a single solution.
        </p>
      </section>
      <section id="how-to-play">
        <h1>How to play it ?</h1>
        <p>
          Sudoku consists of a 9x9 grid, which is divided into nine 3x3 boxes.
          The goal is to fill in the empty cells with numbers from 1 to 9,
          without repeating any number in the same row, column, or box.
        </p>
        <div className="imgs">
          <img src={rows} alt="sudoku rows" />
          <img src={cols} alt="sudoku rows" />
          <img src={boxes} alt="sudoku rows" />
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
