import React from "react";
import {
  WalletSignerType,
  WalletContext,
} from "../../../context/walletContext";
import { Button, Text } from "@nextui-org/react";
import { Transaction } from "@hashgraph/sdk";
import Spinner from "@nextui-org/react";

const PayBlade = ({ tokenId }) => {
  const { signerType, connectedId, submitTransaction, associateToken } =
    React.useContext(WalletContext);
  // purchase mint attempt
  const [loading, setLoading] = React.useState(false);
  const [txModalShow, setTxModalShow] = React.useState(false);

  const handlePurchase = async () => {
    if (!connectedId) return alert("Pair wallet first");
    const associateQuery = `${process.env.NEXT_PUBLIC_MIRRORNODE}tokens/${tokenId}/balances?account.id=${connectedId}`;
    console.log("associateQuery", associateQuery);
    const associateRes = await fetch(associateQuery);
    const data = await associateRes.json();
    let doesAccountHaveToken = data.balances.length > 0;
    if (!doesAccountHaveToken && signerType === "blade") {
      console.log("Needs associating...");
      const hasAssociatedToken = await handleAssociateToken();
      console.log("Result for handleAssociateToken: ", hasAssociatedToken);
      if (!hasAssociatedToken) return;
    }
    // hide tx modal before sign tx comes up
    setTxModalShow(false);
    const hasExecutedAtomicSwap = await executeAtomicSwap();
    console.log("Swap has executed: ", hasExecutedAtomicSwap);
  };

  const handleAssociateToken = async () => {
    setLoading(true);
    const [transactionId, error] = await associateToken(tokenId);
    if (!transactionId) {
      setLoading(false);
      console.error(error);
      return false;
    }
    // check consensus
    const transactionConsensusQueryUrl =
      process.env.NEXT_PUBLIC_MIRRORNODE +
      "transactions/" +
      convertString(transactionId);

    let transactionResult = await getRequestUntilResult(
      transactionConsensusQueryUrl
    );

    if (!transactionResult) return false;
    transactionResult = transactionResult.transactions[0].result;
    setLoading(false);

    const isAssociated = "SUCCESS" || "TOKEN_ALREADY_ASSOCIATED_TO_ACCOUNT";
    console.log("is associated (inside handleAssociateToken): ", isAssociated);
    return isAssociated;
  };

  const executeAtomicSwap = async () => {
    setLoading(true);
    let res;
    try {
      res = await fetch("/api/buy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tokenId,
          buyer: connectedId,
        }),
      });
    } catch (err) {
      setLoading(false);
      setTxModalShow(true);
      return false;
    }
    const { bytes } = await res.json();
    const transaction = Transaction.fromBytes(bytes.data);

    let transactionId;
    try {
      transactionId = await submitTransaction(transaction);
    } catch (err) {
      console.error("Error submitting transaction:");
      console.error(err);
      setLoading(false);
      return false;
    }
    console.log("transactionId", transactionId);
    // check consensus
    const transactionConsensusQueryUrl =
      process.env.NEXT_PUBLIC_MIRRORNODE +
      "transactions/" +
      convertString(transactionId);

    let transactionResult = await getRequestUntilResult(
      transactionConsensusQueryUrl
    );

    transactionResult = transactionResult.transactions[0].result;
    setLoading(false);

    return transactionResult === "SUCCESS" ? true : false;
  };

  return (
    <>
      {loading && <h1>H1</h1>}
      <Button onClick={handlePurchase} flat auto rounded color="primary">
        <Text
          css={{ color: "inherit" }}
          size={12}
          weight="bold"
          transform="uppercase"
        >
          Buy
        </Text>
      </Button>
    </>
  );
};

async function getRequestUntilResult(url: string, delay = 1000): Promise<any> {
  return new Promise(async (resolve, reject) => {
    const timeout = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("Timeout"));
      }, 15000); // 7 seconds
    });

    const request = new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        if (data && Object.keys(data).length > 0) {
          resolve(data);
        } else {
          setTimeout(
            () => getRequestUntilResult(url, delay).then(resolve).catch(reject),
            delay
          );
        }
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        setTimeout(
          () => getRequestUntilResult(url, delay).then(resolve).catch(reject),
          delay
        );
      }
    });

    // Run the request and timeout promises in parallel and return the one that finishes first
    Promise.race([request, timeout]).then(resolve).catch(reject);
  });
}

function convertString(str: string) {
  let parts = str.split("@");
  parts[1] = parts[1].replace(".", "-");
  return parts.join("-");
}

export default PayBlade;
