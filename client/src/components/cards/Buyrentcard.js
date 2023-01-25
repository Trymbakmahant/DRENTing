import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Buyrentcard = () => {
  const [posts, setPost] = useState([]);
  const a = async () => {
    try {
      const { data } = await axios.post(
        `http://localhost:8081/api/productData/all`
      );
      setPost(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    a();
  }, []);

  useEffect(() => {}, [posts]);
  const id = "myass";
  return (
    <>
      {/* <button onClick={a}> click me</button> */}
      <div className="grid col-span-2 lg:grid-cols-3 place-content-center  divide-y  gap-4">
        {posts &&
          posts.map((post) => (
            <div className=" p-8 	">
              <div className="card w-96 h-96 card-bordered shadow-xl  glass ">
                <Link
                  style={{ marginRight: "20px" }}
                  exact
                  className="nav-link btn-ghost"
                  to={"/buy/" + post._id}
                >
                  <figure>
                    <a href={post.imageUrl}>
                      <img
                        src={post.imageUrl}
                        onClick={post.imageUrl}
                        className="rounded-xl"
                      />
                    </a>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{post.name}</h2>
                    {/* <h2>DESCRIPTION!</h2> */}
                    <p>{post.description}</p>
                    <div className="card-actions justify-end">
                      <button className="btn ">Rent Now</button>
                      <button className="btn  ">Buy Now</button>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
export default Buyrentcard;
