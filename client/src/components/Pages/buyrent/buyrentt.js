import { useContext, useEffect, useState } from "react";
import { accContext } from "../../context/accountContext";
import { useParams } from "react-router-dom";
import axios from "axios";
const Buy = () => {
  const[post, setPost] = useState([]);

  const { _id } = useParams();

  const b = async () => {
    try {
      const { data } = await axios.post("http://localhost:8081/api/Checkid", {
        _id,
      });
      setPost(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    b();
  }, []);
  return (
    <>
     <div className=" p-8 	">
        { post[0]&&post[0]._id&& <div className="card card-side h-screen	 shadow-2xl justify-items-center pt-20   glass ">
                  
                    <figure>
                      
                        <img className="	 w-auto h-full	 "
                          src={post[0].imageUrl}
                          
                          
                        />
                    
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{post[0].name}</h2>
                      {/* <h2>DESCRIPTION!</h2> */}
                      <p>{post[0].description}</p>
                      <div className="card-actions justify-end">
                        <button className="btn ">Rent Now</button>
                        <button className="btn  ">Buy Now</button>
                      </div>
                    </div>
                
                </div>}
            </div>
    </>
  );
};
export default Buy;
