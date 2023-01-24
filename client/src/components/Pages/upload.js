import { useState, useRef, useContext } from "react";
import axios from "axios";
function Upload() {
  const name = useRef();
  const description = useRef();
  const image = useRef();
  const catogory = useRef();
  const rental = useRef();
  const buying = useRef();
  const owner = "address of uploader";

  const submitter = async () => {
    const datais = {
      name: name.current.value,
      description: description.current.value,
      image: image.current.value,
      catogory: catogory.current.value,
      rental: rental.current.value,
      buying: buying.current.value,
      owner,
    };
    try {
      const data = await axios.post(
        "http://localhost:8081/api/postproduct",
        datais
      );
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="grid justify-items-center pt-20 ">
     
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">product's name</span>
        </label>
        <input
          type="text"
          ref={name}
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">prduct's description</span>
        </label>
        <input
          type="text"
          ref={description}
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">product's image link </span>
        </label>
        <input
          type="text"
          ref={image}
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">product's catogory</span>
        </label>
        <input
          type="text"
          ref={catogory}
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">product rental price</span>
        </label>
        <input
          type="text"
          ref={rental}
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">product buying price price</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          ref={buying}
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="pt-2">
        {" "}
        <button className="btn btn-success " onClick={submitter}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Upload;

//buing rate renting rate  product description product image  product name product catogery