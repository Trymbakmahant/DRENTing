import { useContext, useEffect, useState } from "react";
import { accContext } from "../../context/accountContext";
import { useParams } from "react-router-dom";
import axios from "axios";
const Buy = () => {
  const [post, setPost] = useState([]);
  const [owner, setOwner] = useState("");
  const [flowrate, setFlowrate] = useState("");
  const { _id } = useParams();
  const ctx = useContext(accContext);
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
        { post[0]&&post[0]._id&& <div className="card card-side h-8/12	w-8/12 shadow-xl  ring ring-offset-4 glass ">
                  
                    <figure>
                      
                        <img className="	 w-[1000px] h-[700px] scale-75	 "
                          src={post[0].imageUrl}
                          
                          
                        />
                    
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{post[0].name}</h2>
                      {/* <h2>DESCRIPTION!</h2> */}
                      <div> About the Item</div>
                      <p>{post[0].description}</p>
                   <div className="font-mono text-xl">rent price: </div>
                      <div> { post[0].rental}</div>
                   <div className="font-mono text-xl">buy price: </div>
                      {/* <button className="btn  ">Buy Now</button> */}
                   <div> {post[0].buying}</div>
                      <div className="card-actions justify-end">
                        <button className="btn " onClick={payment}>Rent Now</button>
                        <button className="btn  ">Buy Now</button>
                      </div>
                    </div>
                
                </div>}

            </div>
         
       
    </>
  );
};
export default Buy;
