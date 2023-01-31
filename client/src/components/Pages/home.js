import Payment from "./Payment";
import { useContext, useEffect, useState } from "react";
import { accContext } from "../context/accountContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ethers } from "ethers";
import image from "./image2.png";
function Home() {
  const ctx = useContext(accContext);
  const accountAddress = ctx.dataState.acclogin.accountAddress;
  const navigate = useNavigate();
  const [posts, setTotalposts] = useState([]);
  const [direct, setDirect] = useState(false);

  const totalposts = async () => {
    const { data } = await axios.post(
      "http://localhost:8081/api/productData/all" //https://drenting.onrender.com
    );
    setTotalposts(data);
  };
  useEffect(() => {
    totalposts();
  }, []);
  const connectFormHandler = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ctx.dataState.addData(provider, signer, accounts[0]);
  };

  return (
    <div className="grid justify-items-center   pt-20">
      {/* <Payment /> */}
      {posts && (
        <p className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-lime-50 pt-20	">
          Total item's listed in our website :- {posts.length}
        </p>
      )}
      <div className="flex justify-between ... pt-20 pb-40">
        {" "}
        <p className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-lime-50 pt-20 pr-10 pl-10">
          <div className="pb-10">
            {" "}
            "Empowering renters, revolutionizing rentals - A decentralized
            solution."
          </div>
          <br />
          <div className="pb-10">
            {" "}
            Introducing, Decentralized E-commerce using Web3 technology. With
            Web3, we can now create a decentralized network where transactions
            occur directly between individuals, without the need for
            intermediaries. This means that personal data and money will be kept
            securely on the blockchain, without the risk of being hacked or
            misused by third parties. It also means that merchants can offer
            their goods and services directly to consumers, without the fees and
            restrictions imposed by traditional e-commerce platforms.
            Decentralized e-commerce is not only about security and control,
            it's about creating a more equitable and accessible online
            marketplace. It enables anyone, anywhere in the world, to
            participate in the global economy, regardless of their financial
            status or geographic location.
          </div>
          <br />
          <button
            onClick={connectFormHandler}
            style={{ marginRight: "20px", marginLeft: "20px" }}
            exact
            className=" btn  btn-outline text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-lime-50  pb-5 pl-10 "
          >
            {accountAddress
              ? `${accountAddress.substr(0, 5)}...${accountAddress.substr(
                  37,
                  42
                )}`
              : "  start your shopping !"}
          </button>
        </p>
        <img className="pl-20" src={image} alt="" />
      </div>
      <p className="text-6xl   bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-lime-50 pt-20	pl-40">
        Build on ... " Superfluid"
      </p>

      <footer className="footer p-10 bg-base-300 mt-80 text-base-content">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
