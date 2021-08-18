const FuckYouToken = artifacts.require('FuckYouToken');

contract('FuckYouToken', function (accounts) {

    const fuckedID = accounts[1];

    console.log("ganache-cli accounts used here...");
    console.log("Contract Owner:  accounts[0] ", accounts[0]);
    console.log("Fucked Account:  accounts[1] ", accounts[1]);

    it("Testing smart contract deposit function", async () => {
        const fuckYouToken = await FuckYouToken.deployed();

        const depositValue = 10 ** 18;

        await fuckYouToken.deposit({from: fuckedID, value: depositValue});

        const balance = await fuckYouToken.balanceOf(fuckedID, {from: fuckedID});

        assert.equal(balance, depositValue, 'The deposited Amount is wrong');
    });

    // it("Testing smart contract withdraw function", async () => {
    //     const fuckYouToken = await FuckYouToken.deployed();
    //
    //     const withdrawValue = BigInt(10 ** 18);
    //
    //     await fuckYouToken.withdraw(withdrawValue, {from: fuckedID});
    //
    //     const balance = await fuckYouToken.balanceOf(fuckedID, {from: fuckedID});
    //
    //     assert.equal(balance, 0, 'The withdrawn Amount is wrong');
    // });
});
