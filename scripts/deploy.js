const hre = require("hardhat");

async function main() {
  const SwapExamplesContract = await hre.ethers.deployContract("SwapExamples");

  await SwapExamplesContract.waitForDeployment();

  console.log(`Contract deployed to ${SwapExamplesContract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
