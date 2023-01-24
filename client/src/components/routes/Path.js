import { Routes, Route } from "react-router-dom";

import Buyrentcard from "../cards/Buyrentcard";
import Upload from "../Pages/upload";
import Home from "../Pages/home";
import Buy from "../Pages/buyrent/buyrentt";

const Paths = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/upload" element={<Upload />} />
      <Route exact path="/buyrent" element={<Buyrentcard />} />
      <Route exact path="/buy" element={<Buy />} />
    </Routes>
  );
};

export default Paths;
