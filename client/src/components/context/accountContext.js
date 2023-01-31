import { createContext, useState } from "react";
import { ethers } from "ethers";
import { BigNumber } from "ethers";
import { Framework } from "@superfluid-finance/sdk-core";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const accContext = createContext({});
const Wrapper = (props) => {
  const [role, setRole] = useState("none");
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

  /// index createation
  async function createIndex() {
    const id = Math.floor(Math.random() * 1000000000);
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner();

    const sf = await Framework.create({
      chainId: 80001,
      provider: provider,
    });

    const daix = await sf.loadSuperToken("fDAIx");

    console.log(daix);

    try {
      const createIndexOperation = sf.idaV1.createIndex({
        indexId: id,
        superToken: "0x96B82B65ACF7072eFEb00502F45757F254c2a0D4",
        // userData?: string
      });

      console.log(createIndexOperation);
      console.log(
        `Congrats - you've just created a new Index!
       Network: Goerli
       Super Token: DAIx
       Index ID: ${id}
    `
      );

      const result = await createIndexOperation.exec(signer);
      console.log(result);
      return id;
    } catch (error) {
      console.log(
        "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
      );
      console.error(error);
    }
  }

  // this is for the distribution of reward
  async function distributeFunds(id, amount) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner();

    const sf = await Framework.create({
      chainId: 80001,
      provider: provider,
    });

    try {
      const distributeOperation = sf.idaV1.distribute({
        indexId: id,
        amount: amount,
        superToken: "0x96B82B65ACF7072eFEb00502F45757F254c2a0D4",
        // userData?: string
      });

      console.log("Distributing...");

      await distributeOperation.exec(signer);

      console.log(
        `Congrats - you've just distributed to an Index!
         Network: Goerli
         Super Token: DAIx
         Index ID: ${id}
         Amount: ${amount}         
      `
      );

      console.log(
        `Congrats - you've just distributed to your index!
    `
      );
    } catch (error) {
      console.log(
        "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
      );
      console.error(error);
    }
  }

  // this is for adding suscriber to   product
  async function updateSubscription(id, address, shares) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner();

    const sf = await Framework.create({
      chainId: 80001,
      provider: provider,
    });

    try {
      const updateSubscriptionOperation = sf.idaV1.updateSubscriptionUnits({
        indexId: id,
        subscriber: address,
        units: shares,
        superToken: "0x96B82B65ACF7072eFEb00502F45757F254c2a0D4",
        // userData?: string
      });

      console.log("Updating your Index...");

      await updateSubscriptionOperation.exec(signer);

      console.log(
        `Congrats - you've just updated an Index!
         Network: Goerli
         Super Token: DAIx
         Index ID: ${id}
         Subscriber: ${address}
         Units: ${shares} units
         
      `
      );

      console.log(
        `Congrats - you've just updated your index!
    `
      );
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
    createIndex,
    distributeFunds,
    updateSubscription,
    role,
    setRole,
  };

  console.log(acclogin);
  return (
    <accContext.Provider value={{ dataState }}>
      {props.children}
    </accContext.Provider>
  );
};
export default Wrapper;
