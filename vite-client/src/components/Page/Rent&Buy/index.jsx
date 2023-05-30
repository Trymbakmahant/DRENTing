import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import "./index.css";
import PeerPay from "peerpaysdk";
import { accContext } from "../../context/AccountContext";

const Buyrentcard = () => {
  const ctx = useContext(accContext);
  const [posts, setPost] = useState([]);
  const c = true;
  const a = async () => {
    try {
      const { data } = await axios.post(
        `http://localhost:8081/api/productData/all`
      );
      console.log(data);
      setPost(data);
      ctx.dataState.setPost(data);
    } catch (err) {
      console.log(err);
    }
  };

  // code for tags

  useEffect(() => {
    a();
  }, []);

  useEffect(() => {}, [posts]);

  return (
    <>
      {/* <button onClick={a}> click me</button> */}
      <div className="grid col-span-2  place-content-center  divide-y  gap-4">
        {posts &&
          posts.map((post) => (
            <div className="cardfullbody " key={post._id}>
              <div className="cardofby">
                <div className="cardimage">
                  <img src={post.imageUrl} onClick={post.imageUrl} />
                </div>
                <div className="card-body">
                  <Link to={"/buy/" + post._id}>
                    <h2 className="card-title">{post.name}</h2>
                    {/* <h2>DESCRIPTION!</h2> */}
                    <div className="badge badge-secondary">
                      {c ? "avilable" : "not-avaliable"}
                    </div>
                    <p>About this Item : {post.description}</p>
                    <div className="card-actions justify-end">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          flexDirection: "row",
                          width: "176px",
                        }}
                      >
                        <div
                          style={{
                            marginTop: "10px",
                          }}
                        >
                          Rent NOW :
                        </div>
                        <div>
                          <PeerPay
                            price={post.buying}
                            limit="10"
                            api="https://api-staging.superfluid.dev"
                            image={post.imageUrl}
                            name={post.name}
                            detail={post.description}
                            maxtime="6"
                            minquantity="PeerPay"
                            labelname="PeerPay"
                            backgroundColor="#ffffff"
                            color="#fff"
                          />
                        </div>
                      </div>
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
