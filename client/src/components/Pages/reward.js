import axios from "axios";
import { useState, useEffect, useContext, useRef } from "react";
import { accContext } from "../context/accountContext";
function Reward() {
  const ctx = useContext(accContext);
  const [history, setHistory] = useState([]);
  const amount = useRef("");
  const accountAddress = ctx.dataState.acclogin.accountAddress;
  const data = { owner: "" };
  data.owner = accountAddress;
  const callfunction = async () => {
    const dataofowner = await axios.post(
      "http://localhost:8081/api/productData/owner",
      data
    );
    console.log(dataofowner);
    setHistory(dataofowner.data);
  };

  async function giveReward(index) {
    console.log(amount.current);
    // try {
    //   await ctx.dataState.distributeFunds(index, amount);
    //   alert("hurre");
    // } catch (e) {
    //   console.log(e);
    // }
  }

  useEffect(() => {
    callfunction();
  }, [accountAddress]);
  return (
    <div>
      <div className="flex justify-center pb-10 text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-lime-50 pt-20	">
        list of all products
      </div>
      <div className="grid col-span-2 lg:grid-cols-3 place-content-center  divide-y  gap-4">
        {" "}
        {history.map((data) => (
          <div className=" p-8 	">
            <div className="card card-compact w-96 h-96 ring-2 ring-current glass ">
              <figure>
                <a href={data.imageUrl}>
                  <img h src={data.imageUrl} onClick={data.imageUrl} />
                </a>
              </figure>
              <div className="card-body ">
                <h2 className="card-title">{data.name}</h2>
                {/* <h2>DESCRIPTION!</h2> */}

                <p>About this Item : {data.description}</p>
                <div className="card-actions justify-end">
                  {/* <button className="btn ">Rent Now</button> */}
                  <div className="font-mono text-xl">rent-price/month: </div>
                  <div> {data.rental}</div>
                  <div className="font-mono text-xl">buy-price: </div>
                  {/* <button className="btn  ">Buy Now</button> */}
                  <div> {data.buying}</div>
                </div>
                <div>
                  <input
                    type="text"
                    ref={amount}
                    placeholder="amount"
                    className="input input-bordered ring pl-3 ring-current max-w-xs"
                  />

                  <button
                    className="btn btn-outline pl-3"
                    onClick={() => {
                      giveReward(data.index);
                    }}
                  >
                    Give Rewards
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reward;
