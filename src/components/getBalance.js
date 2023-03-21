const getBalance = async (address) => {
    const Web3 = require('web3');
    const  url = "https://eth-mainnet.g.alchemy.com/v2/TTLLqv5MxV8X-bMTZpWG70XuItqDGRTo";
    const web3 = new Web3(url);
    const fetchBalance =  await web3.eth.getBalance(address);
    const balanceInEth = web3.utils.fromWei(fetchBalance,'ether');
   return balanceInEth;
}

export default getBalance;