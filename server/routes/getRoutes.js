const express = require("express")
const {contractWithProvider,contractWithSigner} =require("../modules/web3ether")
const {convertBigIntToString} = require('../utill/convertToBigInt')
require('dotenv').config({path:".env"})




const router = express.Router();


router.get("/allItems",async(req,res)=>{
try{
    const result = await contractWithProvider.getAllItems();
    const convertedResult = result.map(convertBigIntToString);
    res.status(200).json({ data: convertedResult, msg: "success" });

}catch(error){
    return res.status(501).json({message:"error fetching from server"})
}

})

//getItemByID
router.get("/getItemById",async(req,res)=>{
    const {itemId} = req.body;
    try{
        const result = await contractWithProvider.getItemByItemId(itemId);
        const convertedResult = result.map(convertBigIntToString);
        res.status(200).json({ data: convertedResult, msg: "success" });
    
    }catch(error){
        return res.status(501).json({message:"error fetching from server"})
    }
    
    })


    module.exports = router;