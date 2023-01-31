import { Routes, Route } from "react-router-dom";

import Buyrentcard from "../cards/Buyrentcard";
import Upload from "../Pages/upload";
import Home from "../Pages/home";
import Buy from "../Pages/buyrent/buyrentt";
import History from "../Pages/history";
import ADs from "../Pages/advertisement";
const Paths = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/upload" element={<Upload />} />
      <Route exact path="/buyrent" element={<Buyrentcard />} />
      <Route exact path="/buy/:_id" element={<Buy />} />
      <Route exact path="/history" element={<History />} />
      <Route exact path="/ads" element={<ADs />} />
    </Routes>
  );
};

export default Paths;
