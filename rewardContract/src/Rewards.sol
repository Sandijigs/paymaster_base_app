// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract RewardContract{
    bool public rewardClaimed = false;

    constructor() payable {
        require(msg.value > 0 , "must send some token as reward!");
    } 

    function claimReward() external {
        require(rewardClaimed == false, "reward already claimed");
        uint256 rewardAmount = address(this).balance;
        payable(msg.sender).transfer(rewardAmount);
        rewardClaimed = true;
    }
}