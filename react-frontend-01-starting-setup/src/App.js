import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNav from "./shared/components/Navigation/MainNav";
import UserPlaces from "./places/pages/UserPlaces";
function App() {
  return (
    <Router>
      <MainNav />
      <main>
        <Routes>
          <Route path="/" element={<Users />} exact />
          <Route path="/:uid/places" element={<UserPlaces />} exact></Route>
          <Route path="/places/new" element={<NewPlace />} exact />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
