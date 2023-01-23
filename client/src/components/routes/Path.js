import { Routes, Route } from "react-router-dom";
<<<<<<< Updated upstream

=======
import Buyrentcard from "../cards/Buyrentcard";
>>>>>>> Stashed changes
import Home from "../Pages/home";

const Paths = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
<<<<<<< Updated upstream
=======
      <Route exact path="/buyrent" element={<Buyrentcard/>}/>
>>>>>>> Stashed changes
    </Routes>
  );
};

export default Paths;
