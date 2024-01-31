/* Importing Components
======================= */

/* Importing Pages
================== */
import LandingPage from "./pages/LandingPage";

/* Importing React Router Components
==================================== */
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
