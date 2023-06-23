import type { HashConnect, MessageTypes } from "hashconnect";
import type { Transaction } from "@hashgraph/sdk";
import { HashConnectSigner } from "hashconnect/dist/esm/provider/signer";

export const disconnect = async (hashconnect: HashConnect) => {
  const topic = hashconnect.hcData?.topic;
  hashconnect.disconnect(topic);
};

export const submitTransaction = async (
  hashconnect: HashConnect,
  transaction: Transaction
) => {
  const signer = getHederaSigner(hashconnect);
  const execute = await transaction.executeWithSigner(signer);
  return execute.transactionId.toString();
};

export const signData = async (
  hashconnect: HashConnect,
  data: Uint8Array
): Promise<MessageTypes.SigningResponse> => {
  const topic = hashconnect.hcData.topic;
  const accountId = hashconnect.hcData.pairingData[0].accountIds[0];
  return await hashconnect.sign(topic, accountId, [data]);
};

export const getHederaSigner = (
  hashconnect: HashConnect
): HashConnectSigner => {
  const network = hashconnect.hcData.pairingData[0].network;
  const topic = hashconnect.hcData.topic;
  const accountId = hashconnect.hcData.pairingData[0].accountIds[0];
  const provider = hashconnect.getProvider(network, topic, accountId);
  const signer = hashconnect.getSigner(provider);
  return signer;
};
