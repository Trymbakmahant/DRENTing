import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import upload from "../image/upload.png";
import { Dialog } from "@headlessui/react";
import { accContext } from "../context/accountContext";
import { ToastContainer, toast } from "react-toastify";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "react-toastify/dist/ReactToastify.css";

function Upload() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const ctx = useContext(accContext);
  const navigate = useNavigate();
  const name = useRef();
  const description = useRef();
  const image = useRef();
  const catogory = useRef();
  const rental = useRef();

  const owner = ctx.dataState.acclogin.accountAddress;
  console.log(ctx.dataState.role);
  var ads = false;
  console.log(ads);
  const navigation = [
    { name: "Product", href: "#" },
    { name: "Features", href: "#" },
    { name: "Marketplace", href: "#" },
    { name: "Company", href: "#" },
  ];
  const submitter = async () => {
    try {
      const index = await ctx.dataState.createIndex();
      const datais = {
        name: name.current.value,
        description: description.current.value,
        image: image.current.value,
        catogory: catogory.current.value,
        rental: rental.current.value,

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
      <div className="flex items-center  ">
        <form
          className="form-control       grid col-span-2 2xl:h-[40rem] h-[33rem] w-[50rem] border-dashed border-[6px] rounded-[60px] text-black border-base-200 mt-40 place-items-center container mx-auto ml-[14rem] 2xl:ml-[36rem]  "
          // onSubmit={formSubmitHandler}
          encType="multipart/form-data"
        >
          <div className="flex justify-center">
            <img src={upload} className="h-[240px] w-[240px]"></img>
          </div>
          {/* <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-[30px] cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={showname}
            />
          </label>
        </div> */}
          <div className="flex justify-between gap-10">
            <div>
              <div>
                <label className="label">
                  <span className="label-text pl-2">Product Title</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered  border-base-200 input-info w-full max-w-xs"
                  placeholder="Name"
                  ref={name}
                  required
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text pl-2">Description</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered border-base-200 input-info w-full max-w-xs"
                  placeholder="Description"
                  ref={description}
                  required
                />
              </div>
            </div>
            <div>
              <div>
                <label className="label">
                  <span className="label-text pl-2">
                    Rental Ammount as per month
                  </span>
                </label>
                <input
                  type="text"
                  className="input input-bordered border-base-200 input-info w-full max-w-xs"
                  placeholder="Description"
                  // ref={thumbnailRef}
                  required
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text pl-2 ">Product Image</span>
                </label>
                <input
                  type="file"
                  name="Image"
                  id="videoUrl"
                  className="file-input file-input-bordered border-base-200 file-input-info w-full max-w-xs"
                  onChange={image}
                  required
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className={`btn bg-white text-black border-base-200 `}
            style={{ marginTop: "7%" }}
          >
            Upload
          </button>
        </form>
      </div>

      {/* <div className="grid justify-items-center    border-4 pt-20 ">
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
      <ToastContainer /> */}
    </>
  );
}

export default Upload;

//buing rate renting rate  product description product image  product name product catogery
