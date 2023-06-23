"use client";

import { ReactNode, createContext, useContext, useState } from "react";
import {
  BladeConnector,
  ConnectorStrategy,
  HederaNetwork,
  BladeSigner,
} from "@bladelabs/blade-web3.js";
import { HashConnect, HashConnectTypes, MessageTypes } from "hashconnect";
import { HashpackHelpers, BladeHelpers } from "../hashgraph/wallets";
import {
  SignerSignature,
  TokenAssociateTransaction,
  Transaction,
} from "@hashgraph/sdk";

export type WalletSignerType = {
  signer: BladeSigner | HashConnect | null;
  signerType: "blade" | "hashpack" | null;
  connectedId: string;
  connectBlade: () => void;
  connectHashpack: () => void;
  disconnect: () => Promise<void>;
  signData: (
    data: Uint8Array
  ) => Promise<SignerSignature | MessageTypes.SigningResponse>;
  submitTransaction: (transaction: Transaction) => Promise<string>;
  associateToken: (tokenId: string) => Promise<[string, string]>;
};

export const WalletContext = createContext<WalletSignerType | null>(null);

const WalletProvider = ({ children }: { children: ReactNode }) => {
  const [bladeConnector, setBladeConnector] = useState<BladeConnector | null>(
    null
  );
  const [signer, setSigner] = useState<BladeSigner | HashConnect | null>(null);
  const [signerType, setSignerType] = useState<"blade" | "hashpack" | null>(
    null
  );
  const [connectedId, setConnectedId] = useState<string>("");

  const connectBlade = async () => {
    const params = {
      network:
        process.env.NEXT_PUBLIC_HEDERA_NETWORK === "testnet"
          ? HederaNetwork.Testnet
          : HederaNetwork.Mainnet,
      dAppCode: "gomusic",
    };

    const bladeConnector = new BladeConnector(ConnectorStrategy.EXTENSION, {
      name: "GoMusic",
      description: "Get closer to your favorite artists",
      icons: ["https://beta.gomusic.co/gm.svg"],
      url: "https://beta.gomusic.co",
    });
    let accountIds: string[] = [];
    try {
      accountIds = await bladeConnector.createSession(params);
    } catch (err) {
      console.error("Error creating blade connector session");
      console.error(err);
    }
    const bladeSigner = bladeConnector.getSigner();
    setBladeConnector(bladeConnector);
    setConnectedId(accountIds[0]);
    setSigner(bladeSigner);
    setSignerType("blade");
  };

  const connectHashpack = async () => {
    window.localStorage.removeItem("hashconnectData");
    const appMetadata: HashConnectTypes.AppMetadata = {
      name: "GoMusic",
      description: "Get closer to your favorite artists",
      icon: "https://beta.gomusic.co/gm.svg",
    };
    const hashpackSigner = new HashConnect();
    console.log(
      "hedera network from env",
      process.env.NEXT_PUBLIC_HEDERA_NETWORK
    );
    await hashpackSigner.init(
      appMetadata,
      process.env.NEXT_PUBLIC_HEDERA_NETWORK! as any,
      true
    );
    hashpackSigner.pairingEvent.once((pairingData) => {
      console.log("HashPack Pairing Event", pairingData);
      setSigner(hashpackSigner);
      setSignerType("hashpack");
      setConnectedId(pairingData.accountIds[0]);
    });
    hashpackSigner.connectToLocalWallet();
  };

  const disconnect = async () => {
    console.log("disconnected ", signerType);
    handleSigner(
      () => BladeHelpers.disconnect(bladeConnector as BladeConnector),
      () => HashpackHelpers.disconnect(signer as HashConnect)
    );
    nullify();
  };

  const signData = async (data: Uint8Array) => {
    return handleSigner(
      () => BladeHelpers.signData(signer as BladeSigner, data),
      () => HashpackHelpers.signData(signer as HashConnect, data)
    );
  };

  const submitTransaction = async (transaction: Transaction) => {
    return handleSigner(
      () => BladeHelpers.submitTransaction(signer as BladeSigner, transaction),
      () =>
        HashpackHelpers.submitTransaction(signer as HashConnect, transaction)
    );
  };

  const associateToken = async (tokenId: string): Promise<[string, string]> => {
    const hederaSigner = await handleSigner(
      () => signer as BladeSigner,
      () => HashpackHelpers.getHederaSigner(signer as HashConnect)
    );

    const transaction = await new TokenAssociateTransaction()
      .setAccountId(connectedId) //get from the wallet
      .setTokenIds([tokenId])
      .freezeWithSigner(hederaSigner);

    let txId = "";
    let error = "";
    try {
      txId = await submitTransaction(transaction);
    } catch (e) {
      error = "Error associating token.";
      console.error(e);
    }
    return [txId, error];
  };

  const handleSigner = async (
    bladeFunc: () => Promise<any> | any,
    hashpackFunc: () => Promise<any> | any
  ) => {
    let result;
    switch (signerType) {
      case "blade":
        result = await bladeFunc();
        break;
      case "hashpack":
        result = await hashpackFunc();
        break;
      default:
        throw new Error("Invalid signer type");
    }
    return result;
  };

  const nullify = () => {
    setSigner(null);
    setSignerType(null);
    setConnectedId("");
  };

  return (
    <WalletContext.Provider
      value={{
        signer,
        signerType,
        connectedId,
        connectBlade,
        connectHashpack,
        disconnect,
        signData,
        submitTransaction,
        associateToken,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export function useWalletContext() {
  return useContext(WalletContext);
}

// Type guards
export function isBladeSigner(
  signer: BladeSigner | HashConnect | null
): signer is BladeSigner {
  return (signer as BladeSigner).getAccountId() !== undefined;
}
export function isHashConnect(
  signer: BladeSigner | HashConnect | null
): signer is HashConnect {
  return (signer as HashConnect).hcData !== undefined;
}

export default WalletProvider;
