import { createContext, useState } from "react";
// import { ethers } from "ethers";
import Home from "../Page/Home/Home";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const accContext = createContext({});
const Wrapper = () => {
  const [role, setRole] = useState("none");
  const [acclogin, setAcclogin] = useState({
    provider: null,
    signer: null,
    accountAddress: null,
  });

  const [post, setPost] = useState([]);

  function addData(provider, signer, accountAddress) {
    setAcclogin(() => {
      return {
        provider,
        signer,
        accountAddress,
      };
    });
  }

  //this is for buying

  // const requestPolygonTransaction = async (owner, polygonAmount) => {
  //   const amount = ethers.utils.formatEther(polygonAmount);
  //   console.log(amount);
  //   const transactionParameters = {
  //     from: acclogin.accountAddress,
  //     to: owner,
  //     data: "0x",
  //     value: ethers.utils.parseUnits(amount, "ether"),
  //     gasLimit: ethers.utils.hexlify(60000),
  //     gasPrice: ethers.utils.hexlify(
  //       parseInt(await acclogin.provider.getGasPrice())
  //     ),
  //   };

  //   await acclogin.signer
  //     .sendTransaction(transactionParameters)
  //     .then(() => {
  //       console.log(" successful");
  //       toast("you have successfully bought the item !... ", {
  //         position: toast.POSITION.TOP_CENTER,
  //       });
  //     })
  //     .catch(() => {
  //       console.log("failed! : please check the amount ");
  //       toast("failed! : please check the amount!... ", {
  //         position: toast.POSITION.TOP_CENTER,
  //       });

  //       return;
  //     });
  // };
  //
  const dataState = [
    addData,
    acclogin,
    post,
    setPost,
    // requestPolygonTransaction,

    role,
    setRole,
  ];

  console.log(acclogin);

  return (
    <accContext.Provider value={{ dataState }}>
      <Home />
    </accContext.Provider>
  );
};

export default Wrapper;
