import { useEffect, useState } from "react";
import axios from "axios";
const Buyrentcard = () => {
  const [posts, setPost] = useState([]);
  const a = async () => {
    try {
      const { data } = await axios.post(
        `http://localhost:8081/api/productData/all`
      );
      setPost(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  // a();
  useEffect(() => {
    a();
  }, []);

  return (
    <>
      {/* <button onClick={a}> click me</button> */}
      <div className="grid col-span-2 lg:grid-cols-3 place-content-center  divide-y  gap-4">
        {posts &&
          posts.products &&
          posts.products.map((post) => (
            <div className=" p-8 	">
              <div className="card w-96 h-96 card-bordered  glass ">
                <figure>
                  <a href={post.images[0]}>
                    <img
                      src={post.images[0]}
                      onClick={post.images[0]}
                      className="rounded-xl"
                    />
                  </a>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{post.title}</h2>
                  {/* <h2>DESCRIPTION!</h2> */}
                  <p>{post.description}</p>
                  <div className="card-actions justify-end">
                    <button className="btn ">Rent Now</button>
                    <button className="btn  ">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
export default Buyrentcard;
