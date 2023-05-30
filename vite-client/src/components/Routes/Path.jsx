// works as expected

import { Routes, Route } from "react-router-dom";
import Buyrentcard from "../Page/Rent&Buy/index.jsx";
import Upload from "../Page/Uploads/index.jsx";
import Home from "../Page/Home/Home.jsx";

import History from "../Page/History/index.jsx";

import Reward from "../Page/Reward/Index.jsx";
export default function Path() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/upload" element={<Upload />} />
      <Route exact path="/buyrent" element={<Buyrentcard />} />
      {/* <Route exact path="/buy/:_id" element={<Buy />} /> */}
      <Route exact path="/history" element={<History />} />
      {/* <Route exact path="/ads" element={<ADs />} /> */}
      <Route exact path="/reward" element={<Reward />} />
    </Routes>
  );
}
