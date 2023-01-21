import { Routes, Route } from "react-router-dom";
import Buyrent from "../cards/Buyrent";

import Home from "../Pages/home";

const Paths = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/buyrent" element={<Buyrent/>}/>
    </Routes>
  );
};

export default Paths;
