import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import MainNav from "./components/Nav/MainNav";
import Home from "./Pages/Home";
import ShowBag from "./Pages/ShowBag";
import ShowWrap from "./Pages/ShowWrap";
import ShowIng from "./Pages/ShowIng";
function App() {
  return (
    <Router>
      <MainNav />
      <main className="mt-[5rem] w-full">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Baguettes" exact element={<ShowBag />} />
          <Route path="/Wraps" exact element={<ShowWrap />} />
          <Route path="/Ingredients" exact element={<ShowIng />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
