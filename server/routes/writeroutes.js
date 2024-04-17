const express = require("express")
const {contractWithProvider,contractWithSigner} =require("../modules/web3ether")
const {convertBigIntToString} = require('../utill/convertToBigInt')
require('dotenv').config({path:".env"})




const router = express.Router();

//addItem(string memory _itemName,string memory _itemCategory,uint256 _itemId,uint256 _itemPrice)
router.post("/addItems",async(req,res)=>{
    const {_itemName,_itemCategory,_itemId,_itemPrice}= req.body
try{
    const tx = await contractWithSigner.addItem(_itemName,_itemCategory,_itemId,_itemPrice);
   await  tx.wait();
    
    res.status(200).json({ data: tx.hash, msg: "success item added" });

}catch(error){
    return res.status(501).json({message:"error fetching from server"})
}

})

router.post("/removeItem",async(req,res)=>{
    const {_index}= req.body
try{
    const tx = await contractWithSigner.removeItem(_index);
   await  tx.wait();
    
    res.status(200).json({ data: tx.hash, msg: "success item removed" });

}catch(error){
    return res.status(501).json({message:"error fetching from server"})
}

})

router.post("/bidItem",async(req,res)=>{
    const {_index}= req.body
try{
    const tx = await contractWithSigner.bidItem(_index);
   await  tx.wait();
    
    res.status(200).json({ data: tx.hash, msg: "success item bid" });

}catch(error){
    return res.status(501).json({message:"error fetching from server"})
}

})
module.exports = router