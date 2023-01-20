import { Routes, Route } from "react-router-dom";

import Home from "../Pages/home";

const Paths = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
};

export default Paths;
