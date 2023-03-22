const getBalance = async (address) => {
    const Web3 = require('web3');
    const  url = "https://eth-mainnet.g.alchemy.com/v2/TTLLqv5MxV8X-bMTZpWG70XuItqDGRTo";
    const web3 = new Web3(url);
    const fetchBalance =  await web3.eth.getBalance(address);
    const txnDetails = {};
    txnDetails.transfersOut = await web3.eth.getTransactionCount(address);
    txnDetails.balanceInEth = web3.utils.fromWei(fetchBalance,'ether');

// Destructure the object properties into separate variables if needed
const { transfersOut, balanceInEth } = txnDetails;
    return txnDetails;
}

export default getBalance;