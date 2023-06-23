import React from "react";
import Image from "next/image";
import {
  WalletSignerType,
  WalletContext,
} from "../../../context/walletContext";

const PairBlade = () => {
  const { connectBlade } = React.useContext(WalletContext) as WalletSignerType;

  return (
    <button
      style={{ display: "inline-block" }}
      className="pe-5 btn-main  me-3"
      onClick={connectBlade}
    >
      <Image
        height="30"
        width="30"
        style={{ objectFit: "contain", marginRight: "5px" }}
        src="/images/bladewallet.png"
        alt="Blade GoMusic Icon"
      />
      <span>Blade</span>
    </button>
  );
};

export default PairBlade;
