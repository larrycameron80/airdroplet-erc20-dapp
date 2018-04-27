pragma solidity ^0.4.18;

import "./SafeMath.sol";
import "./ERC20.sol";

Contract Airdroplet
{

    ERC20 public token;
    using SafeMath for uint256;

    function airdropExecute(address source, address[] recipents, uint256 airdrop) public
    {

        uint x = 0;
        token = ERC20(source);

        while(x++ < recipents.length)
        {

            token.transferFrom(msg.sender, recipents[x], airdrop);

        }


    }


}
