import { useContext, useEffect, useState, useRef } from "react";
import { accContext } from "../../context/accountContext";
import { useParams } from "react-router-dom";
import { ethers } from "ethers";
import axios from "axios";
import { Provider } from "@ethersproject/abstract-provider";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Buy = () => {
  const [post, setPost] = useState([]);
  const [owner, setOwner] = useState("");
  const [name, setName] = useState("");
  const [flowrate, setFlowrate] = useState("");
  const [loading, setLoading] = useState(false);
  const[laodingg, setloadingg]=useState(false);
  const { _id } = useParams();

  const[isloadingg ,setLoadingg ]= useState(false)


  const [isloading, setIsloading] = useState(false);

  const enddateInputRef = useRef(null);
  const [startdate, setStartDate] = useState("");
  const [index, setIndex] = useState("");
  const [enddate, setEndDate] = useState("");
  const ctx = useContext(accContext);
  const startdateInputRef = useRef(null);
  const [polygonAmount, setpolygonAmount] = useState("");
  const b = async () => {
    try {
      const { data } = await axios.post("http://localhost:8081/api/Checkid", {
        _id,
      });
      setPost(data);
      setOwner(data[0].owner);
      setIndex(data[0].index);
      setFlowrate(data[0].rental);
      setName(data[0].name);
      setpolygonAmount(data[0].buying);
      console.log(owner);
    } catch (err) {
      console.log(err);
    }
  };
  const user = ctx.dataState.acclogin.accountAddress;
  const productname = name;

  async function payment() {
    console.log(index);
    await ctx.dataState.updateSubscription(
      index,
      ctx.dataState.acclogin.accountAddress,
      1
    );
    setLoading(true);
    await ctx.dataState.createNewFlow(owner, flowrate);
    const dataofhistory = {
      flowrate,
      user,
      startdate,
      enddate,
      productname,
      owner,
    };
    const data = await axios.post(
      "http://localhost:8081/api/history/renter",
      dataofhistory
    );
    console.log(data);
    
    setLoading(false);
    toast("you have rented this product successfully!...",{
      position: toast.POSITION.TOP_CENTER
  },{containerId: 'B'})
  }

  const handlestartChange = (e) => {
    setStartDate(e.target.value);
  };
  const handleendChange = (e) => {
    setEndDate(e.target.value);
  };

  //this section is  for the performing  buy operation
  async function buy() {
    setLoadingg(true);
    try {
      console.log(polygonAmount);
      await ctx.dataState.requestPolygonTransaction(owner, polygonAmount);
     toast.success("you have successfully bought the item !... ",{
      position: toast.POSITION.TOP_CENTER
  }, {containerId: 'A'}
  )

  setLoadingg(false);

    } catch (e) {
      console.log(e);
      toast.error(" Transection does not completed  ",{
        position: toast.POSITION.TOP_CENTER
    })
    }
    const date = new Date(Date.now());
    const amount = post[0].buying;
    const dataofhistory = {
      amount,
      user,
      date,
      productname,
      owner,
    };
    const data = await axios.post(
      "http://localhost:8081/api/history/buyer ",
      dataofhistory
    );
    console.log(data);

    setLoading(false);
  }
  //
  useEffect(() => {
    b();
   
    

  }, []);

  return (
    <>

      <div className="flex p-8 justify-center pt-20	">
        {post[0] && post[0]._id && (
          <div className="card card-side h-8/12	w-8/12 shadow-xl  ring ring-offset-4 glass">
            <figure>
              <img
                className="	 w-[1000px] h-[700px] scale-75	 "
                src={post[0].imageUrl}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{post[0].name}</h2>
              {/* <h2>DESCRIPTION!</h2> */}
              <div> About the Item</div>
              <p>{post[0].description}</p>
              <div className="font-mono text-xl">rent price: </div>
              <div> {post[0].rental} wei/monthly</div>
              <div className="font-mono text-xl">buy price: </div>
              {/* <button className="btn  ">Buy Now</button> */}
              <div> {post[0].buying} wei</div>

              <button
                onClick={payment}
                className={`btn outline btn-current  ${loading && "loading"}`}
              >
                {loading ? "Loading...." : "rent now  "}
              </button>
              <button
                className={`btn outline btn-current  ${isloadingg && "loading"}`}
                onClick={buy}
              >
                {" "}
                {isloadingg ? "Loading...." : "buy nows "}
              </button>
              <div className="modal " id="my-modal-2">
                <div className="modal-box">
                  <div className="flex justify-between">
                    <div>
                            
                      <input
                        type="date"
                        onChange={handlestartChange}
                        ref={startdateInputRef}
                      />
                            <p className="pl-11">Start Date: {startdate}</p>
                          
                    </div>
                    <div>
                            
                      <input
                        type="date"
                        onChange={handleendChange}
                        ref={enddateInputRef}
                      />
                            <p className="pl-11">End Date: {enddate}</p>
                          
                    </div>
                  </div>
                  <p className="py-4">
                    total money you have to pay for this ...
                  </p>
                  <div className="modal-action">
                    <a href="#" className="btn" onClick={payment}>
                      make payment
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
      </div>
      <ToastContainer  enableMultiContainer containerId={'A'}/>
        <ToastContainer  enableMultiContainer containerId={'B'}/>
    </>
  );
};
export default Buy;
