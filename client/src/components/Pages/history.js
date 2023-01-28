import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { accContext } from "../context/accountContext";
function History() {
  const data = { adress: "" };
  const ctx = useContext(accContext);
  data.adress = ctx.dataState.acclogin.accountAddress;
  console.log(data);
  const callfunction = async () => {
    const datais = await axios.post(
      "http://localhost:8081/api/history/get",
      data
    );

    console.log(datais.data);
  };
  useEffect(() => {
    callfunction();
  }, []);
  return (
    <div>
      hello world
      <h1>kya kr ra h bhai</h1>
    </div>
  );
}

export default History;
