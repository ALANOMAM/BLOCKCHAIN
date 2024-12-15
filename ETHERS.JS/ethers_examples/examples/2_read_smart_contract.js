//import ethers
const { ethers } = require("ethers");

//connect to infuria and etheriusm blockchain
const INFURA_ID = "3cfdc205beb2497087b8a7d7b6e0dfad";
const provider = new ethers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${INFURA_ID}`
);

//Abstract Binary Interface (ABI). Describes what functions the contract has
//and how everything works
const ERC20_ABI = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint)",
];

const address = "0x6B175474E89094C44Da98b954EedeAC495271d0F"; // DAI smart Contract address

//talk to the smart contract by creating a contract object using three properties
//-"address" address of the smart contract on the blockchain
//-"ERC20_ABI" the abi of the contract
//-"provider" the provider or signer, in our case we are connected to infura
const contract = new ethers.Contract(address, ERC20_ABI, provider);

const main = async () => {
  const name = await contract.name();
  const symbol = await contract.symbol();
  const totalSupply = await contract.totalSupply();

  console.log(`\nReading from ${address}\n`);
  console.log(`Name: ${name}`);
  console.log(`Symbol: ${symbol}`);
  console.log(`Total Supply: ${totalSupply}\n`);

  //geting the balance of another contract just to test function with parameter
  //because the "name()","symbol()" and "totalSupply()" above dont take params
  const balance = await contract.balanceOf(
    "0x6c6Bc977E13Df9b0de53b251522280BB72383700"
  );

  console.log(`Balance Returned: ${balance}`); // raw balance (without decimal)
  console.log(`Balance Formatted: ${ethers.formatEther(balance)}\n`); //formatted balance
};
main();
