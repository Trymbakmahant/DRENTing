import { ethers } from "ethers";
import { useState, useContext, useEffect } from "react";
import { accContext } from "../context/accountContext";
import { axios } from "axios";
import logo from "./logo.png";
import { Link } from "react-router-dom";
function Navbar() {
  const ctx = useContext(accContext);

  const accountAddress = ctx.dataState.acclogin.accountAddress;

  const connectFormHandler = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ctx.dataState.addData(provider, signer, accounts[0]);
  };
  console.log(ctx.dataState.role);

  return (
    <div className="navbar border-2 bg-base-100">
      <li>
        <div className="avatar">
          <div className="w-10 rounded">
            <img src={logo} />
          </div>
        </div>
      </li>
      <div className="flex-1">
        <Link
          style={{ marginRight: "20px" }}
          exact
          className="btn btn-ghost normal-case text-xl"
          to="/"
        >
          DRENTing
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0}>
            {accountAddress !== null && ctx.dataState.role == "none" && (
              <>
                <button
                  onClick={() => {
                    ctx.dataState.setRole("Merchant");
                    console.log("running");
                  }}
                  className=" btn btn-outline"
                >
                  Become Merchant
                </button>

                <button
                  onClick={() => {
                    console.log("running");
                    ctx.dataState.setRole("Buyer");
                  }}
                  className=" btn btn-outline"
                >
                  Become Buyer
                </button>
              </>
            )}
            {accountAddress !== null && ctx.dataState.role == "Merchant" && (
              <>
                <li>
                  <Link
                    style={{ marginRight: "20px" }}
                    exact
                    className="nav-link btn-ghost"
                    to="/buyrent"
                  >
                    Rent/Buy
                  </Link>
                </li>
                <Link
                  style={{ marginRight: "20px" }}
                  exact
                  className="nav-link btn-ghost"
                  to="/upload"
                >
                  Upload Products
                </Link>
                <li>
                  <Link
                    style={{ marginRight: "20px" }}
                    exact
                    className="nav-link btn-ghost"
                    to="/history"
                  >
                    History
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ marginRight: "20px" }}
                    exact
                    className="nav-link btn-ghost"
                    to="/reward"
                  >
                    Reward
                  </Link>
                </li>
              </>
            )}
            {ctx.dataState.role == "Buyer" && (
              <>
                <li>
                  <Link
                    style={{ marginRight: "20px" }}
                    exact
                    className="nav-link btn-ghost"
                    to="/buyrent"
                  >
                    Rent/Buy
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ marginRight: "20px" }}
                    exact
                    className="nav-link btn-ghost"
                    to="/history"
                  >
                    History
                  </Link>
                </li>
              </>
            )}
            <a>
              <button
                onClick={connectFormHandler}
                style={{ marginRight: "20px", marginLeft: "20px" }}
                exact
                className=" btn btn-outline"
              >
                {accountAddress
                  ? `${accountAddress.substr(0, 5)}...${accountAddress.substr(
                      37,
                      42
                    )}`
                  : "connect"}
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
