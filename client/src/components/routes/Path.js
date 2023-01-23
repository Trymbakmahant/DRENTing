import { Routes, Route } from "react-router-dom";


import Buyrentcard from "../cards/Buyrentcard";

import Home from "../Pages/home";

const Paths = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />

      <Route exact path="/buyrent" element={<Buyrentcard/>}/>

    </Routes>
  );
};

export default Paths;
