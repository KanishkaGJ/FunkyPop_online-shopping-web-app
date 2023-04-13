import React from "react";
import "./App.css";

import AdminLogin from "./components/adminLogin";
import { Router } from "express";

function App() {
  return(

    <Router>
      <div className="App">
        <Routes>
          <Route path="/adminLogin" element={<AdminLogin />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
