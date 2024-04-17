// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract MarketPlace{
    //struct to hold items details
    struct ItemDetail{
        string itemName;
        string itemCategory;
        uint  itemId;
        uint   itemPrice;
        uint numberOfUsersRequested;
        bool   isSold;
    }

    //mapping uint => struct
    mapping(uint => ItemDetail)public itemdetails;

    //itemIndex to track number of items
    uint256 itemIdex;


    //function AddItemToMarketPlace
    function addItem(string memory _itemName,string memory _itemCategory,uint256 _itemId,uint256 _itemPrice)public{
        uint256 _index = itemIdex;
        itemdetails[_index] = ItemDetail({itemName:_itemName,itemCategory:_itemCategory,itemId:_itemId,itemPrice:_itemPrice,numberOfUsersRequested:0,isSold:false});
        itemIdex ++;
 
    }

    //function to getAllItems in The market Place

    function getAllItems()public view returns(ItemDetail[] memory items){
        items = new ItemDetail[](itemIdex);
        for(uint256 i=0;i <itemIdex;++i){
            items[i]= itemdetails[i];

        }
        return items;
    }


    //function to query a specific item by its itemId;
    function getItemByItemId(uint _itemId)public view returns(ItemDetail[] memory items){
        uint count=0;

        for(uint i=0;i<itemIdex;++i){
            if(itemdetails[i].itemId == _itemId){
                count ++;
            }
        }

        items = new ItemDetail[](count);

        uint _index=0;

        for(uint i=0;i<itemIdex;++i){
            if(itemdetails[i].itemId == _itemId){
                items[_index] = itemdetails[i];
                _index ++;
            }
        }
        return items;   
        
        

    }


    //function to delete item
    function removeItem(uint256 _index)public{
        require(_index <= itemIdex,"out of range");

        for(uint i =_index; i < itemIdex -1;i++){
            itemdetails[i] = itemdetails[i +1];

        }
        delete  itemdetails[itemIdex -1];
        itemIdex --;
    }

    //funtion to bid 
    function bidItem(uint _index)public{
        itemdetails[_index].numberOfUsersRequested = itemdetails[_index].numberOfUsersRequested +1;
    }

}