import Payment from "./Payment";
import { useContext, useEffect } from "react";
import { accContext } from "../context/accountContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const ctx = useContext(accContext);
  const navigate = useNavigate()
  useEffect(()=>{
    if(ctx.dataState.acclogin.accountAddress){
      navigate("/buyrent")
    }
  },[ctx.dataState.acclogin.accountAddress])
  return (
    <div>
      <Payment />
      
    </div>
  );
}

export default Home;
