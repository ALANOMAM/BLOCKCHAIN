//import ethers to the page after having installed it
const { ethers } = require("ethers");

// FOR THIS LESSON WE WILL USE "INFURA" AS OUR ETHERIUM NODE PROVIDER
// WE COULD CREATE A NODE OURSELVES BUT ITS VERY COMPLEX.

//lines that establish my connection to the blockchain START
const INFURA_ID = "3cfdc205beb2497087b8a7d7b6e0dfad"; //infura key
const provider = new ethers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${INFURA_ID}`
);
//lines that establish my connection to the blockchain END

//get the address of a fake walet and save it in a constant
const address = "0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e";

// Main async function to read the amount of eth in our address above
// and give us the answer
const main = async () => {
  const rawBalance = await provider.getBalance(address); //raw balance (without decimals)
  const formatedBalance = ethers.formatEther(rawBalance); // formatted balance
  console.log(`\nETH Balance of ${address} --> ${formatedBalance} ETH\n`);
};

main();
