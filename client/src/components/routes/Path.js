import { Routes, Route } from "react-router-dom";

import Home from "../Home/Home";

const Paths = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
};

export default Paths;
