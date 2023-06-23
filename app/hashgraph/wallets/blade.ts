import type { BladeConnector, BladeSigner } from "@bladelabs/blade-web3.js";
import type { Transaction, SignerSignature } from "@hashgraph/sdk";

export const disconnect = async (blade: BladeConnector) => {
  await blade.killSession();
};

export const submitTransaction = async (
  blade: BladeSigner,
  transaction: Transaction
) => {
  const execute = await blade.call(transaction);
  return execute.transactionId.toString();
};

export const signData = async (
  blade: BladeSigner,
  data: Uint8Array
): Promise<SignerSignature> => {
  return (await blade.sign([data]))[0];
};
