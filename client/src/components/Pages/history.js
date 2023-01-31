import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { accContext } from "../context/accountContext";
import classes from "../css/history.css";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function History() {
  const data = { adress: "" };
  const ctx = useContext(accContext);
  const [histry, setHistry] = useState([]);
  const [history, setHistory] = useState([]);
  data.adress = ctx.dataState.acclogin.accountAddress;
  const callfunction = async () => {
    const datais = await axios.post(
      "http://localhost:8081/api/history/get/buyer",
      data
    );
    const dataofowner = await axios.post(
      "http://localhost:8081/api/history/get/owner",
      data
    );
    setHistory(dataofowner.data);
    setHistry(datais.data);
    console.log(histry);
  };
  async function  deleteflow(renter) {
    await ctx.dataState.deleteExistingFlow(renter);
    toast.success("you have successfully bought the item !... ",{
      position: toast.POSITION.TOP_CENTER
  })
  }
  useEffect(() => {
    callfunction();
  }, [data.adress]);
  return (
    <>
    <div>
    <ToastContainer/>
      <div className="grid col-span-2 lg:grid-cols-3 place-content-center  divide-y  gap-4 ">
        {ctx.dataState.role == "Merchant" &&
          history.map((data) => (
            <div className=" card w-96 bg-base-100  ring-2 ring-white shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  {" "}
                  Productname : {data.productname}
                </h2>
                <p> Flowreate : {data.flowrate}</p>
                <p> user : {data.user}</p>
                <p className="">start date {data.startdate}</p>
                <p className="">end date {data.enddate}</p>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-current "
                    onClick={deleteflow(data.owner)}
                  >
                    cancel
                  </button>
                </div>
              </div>
            </div>
          ))}
        {ctx.dataState.role == "Buyer" &&
          histry.map((data) => (
            <div className=" card w-96 bg-base-100  ring-2 ring-white shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  {" "}
                  Productname : {data.productname}
                </h2>
                <p> Flowreate : {data.flowrate}</p>
                <p> user : {data.user}</p>
                <p className="">start date {data.startdate}</p>
                <p className="">end date {data.enddate}</p>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-current "
                    onClick={deleteflow(data.owner)}
                  >
                    cancel
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
    </>
  );
}

export default History;
