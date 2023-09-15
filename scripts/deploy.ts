
import { ethers } from "hardhat";

const initial_supply = 10000;

async function main() {

  const deploy_contract = await ethers.deployContract("FungibleToken", [initial_supply]);

  await deploy_contract.waitForDeployment();

  console.log("FungibleToken is deployed to : ",await deploy_contract.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
