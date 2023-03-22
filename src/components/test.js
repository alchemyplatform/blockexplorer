const getBalance = async () => {
    const Web3 = require('web3');
    const  url = "https://eth-mainnet.g.alchemy.com/v2/TTLLqv5MxV8X-bMTZpWG70XuItqDGRTo";
    const web3 = new Web3(url);
    const fetchBalance =  await web3.eth.getTransactionCount('0x6B4348E32Db65682b956BF0f3A911A18624a2a0b');
    //const balanceInEth = web3.utils.fromWei(fetchBalance,'ether');
  console.log(fetchBalance);
}

getBalance();