// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FuckYouToken is ERC20("Fuck You Token", "FUCKYOU") {

    address creator;

    constructor() {
        creator = msg.sender;
    }

    event Deposit(address indexed dst, uint wad);
    event Withdrawal(address indexed src, uint wad);

    function deposit() public payable {
        _mint(msg.sender, msg.value);
        emit Deposit(msg.sender, msg.value);
    }

    function withdraw(uint wad) public {
        _burn(msg.sender, wad);

        payable(msg.sender).transfer(wad / 2);
        payable(creator).transfer(wad / 2);
        emit Withdrawal(msg.sender, wad);
    }
}
