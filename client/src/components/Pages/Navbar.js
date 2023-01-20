import {ethers} from 'ethers';
import{useState} from 'react'
function Navbar() {
  const[accountAddress,useaccountAdress] = useState();
  const connectFormHandler = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    useaccountAdress(accounts[0]);

  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">DRENTing</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Rent/Buy</a>
          </li>
          <li tabIndex={0}>
            <a>Upload Product</a>
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
