const express = require("express")
const {ethers,Contract,LiskRPC,parseEther} =require("../modules/web3ether")
require('dotenv').config({path:".env"})




const router = express.Router();


router.get("/allItems",async(req,res)=>{
try{

}catch(error){
    return res.status(501).json({message:"error fetching from server"})
}

})