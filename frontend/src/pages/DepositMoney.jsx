import { useState } from "react";
import api from "../api/axios";

function DepositMoney() {
  const [userId, setUserId] =
    useState("");

  const [amount, setAmount] =
    useState("");

  const submit = async () => {
    await api.post(
      "/transactions/deposit",
      {
        userId,
        amount,
      }
    );

    alert("Money Added");
  };

  return (
    <>
      <h2>Deposit</h2>

      <input
        placeholder="User ID"
        onChange={(e) =>
          setUserId(e.target.value)
        }
      />

      <input
        placeholder="Amount"
        onChange={(e) =>
          setAmount(e.target.value)
        }
      />

      <button onClick={submit}>
        Deposit
      </button>
    </>
  );
}

export default DepositMoney;