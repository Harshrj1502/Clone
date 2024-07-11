import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Homepage/Home";

const routes = (
  <Router>
    <Routes>
      <Route path="/homepage" element={<Home />} />
      <Route path="/mainpage" element={<div>helloworld</div>} />
    </Routes>
  </Router>
);

const App = () => {
  return (
    <>
      <div>{routes}</div>
    </>
  );
};

export default App;
