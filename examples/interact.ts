import { makeContractCall, broadcastTransaction, AnchorMode } from "@stacks/transactions";
import { StacksTestnet } from "@stacks/network";

const network = new StacksTestnet();

async function incrementCounter() {
  const txOptions = {
    contractAddress: "ST...",
    contractName: "counter",
    functionName: "increment",
    functionArgs: [],
    senderKey: "your-private-key",
    network,
    anchorMode: AnchorMode.Any,
  };
  const tx = await makeContractCall(txOptions);
  const result = await broadcastTransaction(tx, network);
  console.log("TX ID:", result.txid);
}

incrementCounter();
