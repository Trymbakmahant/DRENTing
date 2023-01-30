import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { accContext } from "../context/accountContext";
import classes from "../css/history.css";
function History() {
  const data = { adress: "" };
  const ctx = useContext(accContext);
  const [histry, setHistry] = useState([]);
  data.adress = ctx.dataState.acclogin.accountAddress;
  console.log(data);
  const callfunction = async () => {
    const datais = await axios.post(
      "http://localhost:8081/api/history/get",
      data
    );
    setHistry(datais.data);
    console.log(histry);
  };
  function deleteflow(renter) {
    ctx.dataState.deleteExistingFlow(renter);
  }
  useEffect(() => {
    callfunction();
  }, [data.adress]);
  return (
    <div className="flex justify-center pt-10 ">
      {histry.map((data) => (
        <div className=" card w-96 bg-base-100  ring-2 ring-white shadow-xl">
          <div className="card-body">
            <h2 className="card-title"> Productname : {data.productname}</h2>
            <p> Flowreate : {data.flowrate}</p>
            <p> user : {data.user}</p>
            <p className="">start date {data.startdate}</p>
            <p className="">end date {data.enddate}</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-current"
                onClick={deleteflow(data.owner)}
              >
                cancel
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default History;
