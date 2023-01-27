import { useContext, useEffect, useState ,useRef} from "react";
import { accContext } from "../../context/accountContext";
import { useParams } from "react-router-dom";
import axios from "axios";
const Buy = () => {
  const [post, setPost] = useState([]);
  const [owner, setOwner] = useState("");
  const [flowrate, setFlowrate] = useState("");
  const { _id } = useParams();
  const ctx = useContext(accContext);
  const startdateInputRef = useRef(null);
    const enddateInputRef = useRef(null);
    const [startdate, setStartDate] = useState('');
    const [enddate, setEndDate] = useState('');

  const handlestartChange = (e) => {
    setStartDate(e.target.value);
  };
  const handleendChange = (e) => {
    setEndDate(e.target.value);
  };

  const b = async () => {
    try {
      const { data } = await axios.post("http://localhost:8081/api/Checkid", {
        _id,
      });
      setPost(data);
      setOwner(data[0].owner);
      setFlowrate(data[0].rental);
      console.log(owner);
    } catch (err) {
      console.log(err);
    }
  };

  async function payment() {
    ctx.dataState.createNewFlow(owner, flowrate);
  }

  useEffect(() => {
    b();
  }, []);
  return (
    <>
      <div className="flex p-8 justify-center pt-20	">
        {post[0] && post[0]._id && (
          <div className="card card-side h-8/12	w-8/12 shadow-xl  ring ring-offset-4 glass ">
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
              <div> {post[0].rental}</div>
              <div className="font-mono text-xl">buy price: </div>
              {/* <button className="btn  ">Buy Now</button> */}
              <div> {post[0].buying}</div>
              <div className="card-actions justify-end">
               
                <a href="#my-modal-2" className="btn">rent now</a>
                <button className="btn  ">Buy Now</button>
                <div className="modal" id="my-modal-2">
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
    <p className="py-4">total money you have to pay for this ...</p>
    <div className="modal-action">
     <a href="#" className="btn" onClick={payment}>make payment</a>
    </div>
  </div>
</div>
             
            
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Buy;
