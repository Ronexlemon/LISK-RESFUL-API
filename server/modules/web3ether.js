const {ethers,Contract,parseEther} = require("ethers")
const LiskRPC = "https://rpc.sepolia-api.lisk.com"
const abi = require("../contract/abi.json")
const {MarketPlaceAddress} = require("../contract/address")

require('dotenv').config({path:".env"})
const KEY = process.env.KEY;

//listening only
const provider = new ethers.JsonRpcProvider(LiskRPC);
const contractWithProvider = new ethers.Contract(MarketPlaceAddress,abi,provider);

//withSigner
const signer = new ethers.Wallet(KEY,provider);
const contractWithSigner = new ethers.Contract(MarketPlaceAddress,abi,signer);


module.exports={
    contractWithProvider,
    contractWithSigner
}