import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { accContext } from "../../context/AccountContext";

function History() {
  const data = { adress: "" };
  const ctx = useContext(accContext);
  const [histry, setHistry] = useState([]);
  const [history, setHistory] = useState([]);
  console.log(histry);
  console.log(history);
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
  };
  async function deleteflow(renter) {
    await ctx.dataState.deleteExistingFlow(renter);
  }
  useEffect(() => {
    callfunction();
  }, [data.adress]);
  return (
    <>
      <div className=" ">
        <div className="flex justify-center pb-10 text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-lime-50 pt-20	">
          Product which is sold by you
        </div>
        <div className="grid col-span-2  place-content-center  divide-y  gap-4">
          {history.map((data) => (
            <div
              className=" card w-96 bg-base-100  ring-2 ring-white shadow-xl"
              key={data._id}
            >
              <div className="card-body">
                <h2 className="card-title">
                  {" "}
                  Productname : {data.productname}
                </h2>
                {data.flowrate && <p> Flowreate : {data.flowrate}</p>}
                <p> user : {data.user}</p>
                <p className=""> date : {data.date}</p>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center pb-10 text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-lime-50 pt-20	">
          Product which is purched by you
        </div>
        <div className="grid col-span-2  place-content-center  divide-y  gap-4">
          {" "}
          {histry.map((data) => (
            <div
              className=" card w-96 bg-base-100  ring-2 ring-white shadow-xl"
              key={data._id}
            >
              <div className="card-body">
                <h2 className="card-title">
                  {" "}
                  Productname : {data.productname}
                </h2>
                <p> Flowreate : {data.flowrate}</p>
                <p> user : {data.user}</p>

                {data.date && <p className=""> date {data.date}</p>}
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-current "
                    onClick={() => {
                      deleteflow(data.owner);
                    }}
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
