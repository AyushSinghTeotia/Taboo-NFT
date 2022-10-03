/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require("dotenv").config();
 require("@nomiclabs/hardhat-ethers");
 const { API_URL, PRIVATE_KEY } = process.env;
 module.exports = {
   solidity: "0.8.7",
   defaultNetwork: "rinkeby",
   networks: {
     hardhat: {},
     rinkeby: {
       url: API_URL,
       accounts: [`0x${PRIVATE_KEY}`],
     },
   },
 };
 //0x90a669356fe7199253B218eeCB5dD533e3a14390