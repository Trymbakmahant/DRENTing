import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { accContext } from "../context/accountContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Upload() {
  const ctx = useContext(accContext);
  const navigate = useNavigate();
  const name = useRef();
  const description = useRef();
  const image = useRef();
  const catogory = useRef();
  const rental = useRef();
  const buying = useRef();
  const owner = ctx.dataState.acclogin.accountAddress;
  console.log(ctx.dataState.role);
  var ads = false;
  console.log(ads);
  const submitter = async () => {
    try {
      const index = await ctx.dataState.createIndex();
      const datais = {
        name: name.current.value,
        description: description.current.value,
        image: image.current.value,
        catogory: catogory.current.value,
        rental: rental.current.value,
        buying: buying.current.value,
        owner,
        index,
        ads,
      };
      const data = await axios.post(
        "http://localhost:8081/api/postproduct",
        datais
      );
      navigate("/buyrent");
      console.log(data);
      toast("you uploaded  this product successfully!...", {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="grid justify-items-center    border-4 pt-20 ">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">product's name</span>
          </label>
          <input
            type="text"
            ref={name}
            placeholder="Type here"
            className="input input-bordered ring   ring-current w-full max-w-xs"
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
            className="input input-bordered w-full ring  ring-current max-w-xs"
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
            className="input input-bordered  w-full ring  ring-current max-w-xs"
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
            className="input input-bordered w-full ring  ring-current max-w-xs"
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
            className="input input-bordered w-full ring  ring-current  max-w-xs"
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
            className="input input-bordered w-full ring ring-current  max-w-xs"
          />
        </div>
        <div className="form-control pt-5">
          <label className="label cursor-pointer">
            <input
              type="checkbox"
              className="checkbox checkbox-primary"
              onClick={() => {
                ads = !ads;
                console.log(ads);
              }}
            />{" "}
            <span className="label-text">
              Click if you want to advertise your product
            </span>
          </label>
        </div>

        <div className="pt-3 pb-4">
          {" "}
          <button className="btn btn-current outline " onClick={submitter}>
            Submit
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Upload;

//buing rate renting rate  product description product image  product name product catogery
