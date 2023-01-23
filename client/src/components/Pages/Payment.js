import { useContext, useRef } from "react";
import { accContext } from "../context/accountContext";
function Payment() {
  const flowRate = "100";
  const reciver = "0xA2152ADe4a9485B68Ad25c3d98fc05e0741E66E7";
  const ctx = useContext(accContext);

  function dothis() {
    console.log("fhowehr");
    ctx.dataState.createNewFlow(reciver, flowRate);
  }
  return (
    <div>
      <button className="btn btn-primary" onClick={dothis}>
        hello
      </button>
    </div>
  );
}

export default Payment;
