import { createContext, useState } from "react";
import { ethers } from "ethers";
import { BigNumber } from "ethers";
import { Framework } from "@superfluid-finance/sdk-core";
export const accContext = createContext({});
const Wrapper = (props) => {
  const [acclogin, setAcclogin] = useState({
    provider: null,
    signer: null,
    accountAddress: null,
  });
  const [post, setPost] = useState([]);
  function addData(provider, signer, accountAddress) {
    setAcclogin((prevState) => {
      return {
        provider,
        signer,
        accountAddress,
      };
    });
  }
  async function createNewFlow(recipient, flowRate) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const calculatedFlowRate = Math.floor(flowRate / 3600 / 24 / 30);
    console.log(calculatedFlowRate);
    const signer = provider.getSigner();

    const sf = await Framework.create({
      chainId: 80001,
      provider: provider,
    });

    try {
      const createFlowOperation = sf.cfaV1.createFlow({
        flowRate: calculatedFlowRate,
        receiver: recipient,
        superToken: "0x96B82B65ACF7072eFEb00502F45757F254c2a0D4",
        // userData?: string
      });

      console.log("Creating your stream...");

      const result = await createFlowOperation.exec(signer);
      console.log(result);
    } catch (error) {
      console.log(
        "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
      );
      console.error(error);
    }
  }

  async function deleteExistingFlow(recipient) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner();

    const sf = await Framework.create({
      chainId: 80001,
      provider: provider,
    });

    console.log(recipient);

    try {
      const deleteFlowOperation = sf.cfaV1.deleteFlow({
        sender: await signer.getAddress(),
        receiver: recipient,
        superToken: "0x96B82B65ACF7072eFEb00502F45757F254c2a0D4",
        // userData?: string
      });

      console.log(deleteFlowOperation);
      console.log("Deleting your stream...");

      const result = await deleteFlowOperation.exec(signer);
      console.log(result);
    } catch (error) {
      console.log(
        "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
      );
      console.error(error);
    }
  }

  //this is for buying

  const requestPolygonTransaction = async (owner, polygonAmount) => {
    const amount = ethers.utils.formatEther(polygonAmount);
    console.log(amount);
    const transactionParameters = {
      from: acclogin.accountAddress,
      to: owner,
      data: "0x",
      value: ethers.utils.parseUnits(amount, "ether"),
      gasLimit: ethers.utils.hexlify(60000),
      gasPrice: ethers.utils.hexlify(
        parseInt(await acclogin.provider.getGasPrice())
      ),
    };

    await acclogin.signer
      .sendTransaction(transactionParameters)
      .then((transaction) => {
        console.log(" successful");
      })
      .catch((e) => {
        console.log("failed! : please check the amount ");

        return;
      });
  };
  //
  const dataState = {
    createNewFlow,
    addData,
    acclogin,
    post,
    setPost,
    requestPolygonTransaction,
    deleteExistingFlow,
  };

  console.log(acclogin);
  return (
    <accContext.Provider value={{ dataState }}>
      {props.children}
    </accContext.Provider>
  );
};
export default Wrapper;
