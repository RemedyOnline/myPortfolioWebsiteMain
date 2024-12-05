import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import { LandingPage } from "./pages/LandingPage";
import LandingPageMain from "./pages";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<LandingPage />} /> */}
          <Route path="/" element={<LandingPageMain />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
