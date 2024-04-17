// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import {Test, console} from "forge-std/Test.sol";
import {MarketPlace} from "../src/MarketPlace.sol";

contract CounterTest is Test {
    MarketPlace public marketplace;

    function setUp() public {
        marketplace = new MarketPlace();
        
    }

    
}
