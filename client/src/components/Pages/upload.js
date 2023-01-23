import { useState, useRef, useContext } from "react";
function Upload() {
  const name = useRef();
  const description = useRef();
  const image = useRef();
  const catogory = useRef();
  const rental = useRef();
  const buying = useRef();

  const submitter = () => {
    console.log(name.current.value);
  };
  return (
    <div>
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
      <button className="btn btn-success" onClick={submitter}>
        Submit
      </button>
    </div>
  );
}

export default Upload;

//buing rate renting rate  product description product image  product name product catogery
