// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
async function main() {
  const TabooNFT = await ethers.getContractFactory("TabooNFT");

  // Start deployment, returning a promise that resolves to a contract object
  const tabooNFT = await TabooNFT.deploy();
  console.log("Contract deployed to address:", tabooNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
//0x90a669356fe7199253b218eecb5dd533e3a14390