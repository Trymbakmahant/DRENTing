import { ethers } from "ethers";
import { useState, useContext, useEffect } from "react";
import { accContext } from "../context/accountContext";

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

  return (
    <div className="navbar border-2 bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">DRENTing</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
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

          <li tabIndex={0}>
            <Link
              style={{ marginRight: "20px" }}
              exact
              className="nav-link btn-ghost"
              to="/upload"
            >
              Upload Video
            </Link>
          </li>
          <li>
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
