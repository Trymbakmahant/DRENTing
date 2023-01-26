import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";

import { accContext } from "../context/accountContext";

const Buyrentcard = () => {
  const ctx= useContext(accContext)
  const [posts, setPost] = useState([]);
  const a = async () => {
    try {
      const { data } = await axios.post(
        `http://localhost:8081/api/productData/all`
      );
      setPost(data);
      ctx.dataState.setPost(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    a();
  }, []);

  useEffect(() => {}, [posts]);

  return (
    <>
      {/* <button onClick={a}> click me</button> */}
      <div className="grid col-span-2 lg:grid-cols-3 place-content-center  divide-y  gap-4">
        {posts &&
          posts.map((post) => (
            <div className=" p-8 	">

              <div className="card w-96 h-96   glass ">
              
                  <figure>
                    
                      <img
                        src={post.imageUrl}
                        
                        
                      />
                 
                  </figure>
                  <div className="card-body">
                  <Link
                  
                  to={"/buy/" + post._id}
                >
                    <h2 className="card-title">{post.name}</h2>
                    {/* <h2>DESCRIPTION!</h2> */}
                    <p>{post.description}</p>
                    <div className="card-actions justify-end">
                   {/* <button className="btn ">Rent Now</button> */}
                   <div className="font-mono text-xl">rent price: </div>
                   <div> { post.rental}</div>
                   <div className="font-mono text-xl">buy price: </div>
                      {/* <button className="btn  ">Buy Now</button> */}
                   <div> {post.buying}</div>
                    
                    </div>
                </Link>
                  </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
export default Buyrentcard;
