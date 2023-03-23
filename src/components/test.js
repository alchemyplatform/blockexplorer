const url = 'https://api.etherscan.io/api?module=account&action=txlist&address=0x938333a35A0De642E60f528EE3BcA92B40BB9129&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=5IMPDY87QQDCPK613FP5X9EDZ9JA1NIRQ3';
const newWeb3 = require('web3');
const  url2 = "https://eth-mainnet.g.alchemy.com/v2/TTLLqv5MxV8X-bMTZpWG70XuItqDGRTo";
const web3 = new newWeb3(url2);
fetch(url)
  .then(response => response.json())
  .then(data => {
    let Stats = {};
    for(i = 0 ; i< data.result.length ; i++){
    const {blockNumber,timeStamp,hash,nonce,sender,receiver,amount,showFees} = Stats;
    let traverse = data.result[i];
    let txnFees = (traverse.gasUsed)*(traverse.gasPrice);
    Stats.showFees = web3.utils.fromWei(String(txnFees),'ether');
    Stats.blockNumber = traverse.blockNumber;
    Stats.timeStamp = traverse.timeStamp;
    Stats.hash = traverse.hash;
    Stats.nonce = traverse.nonce;
    Stats.sender = traverse.from;
    Stats.receiver = traverse.to;
    Stats.amount = web3.utils.fromWei(String(traverse.value) ,'ether');
    
    console.log(Stats);
  }

    // The retrieved data will be logged to the console
  })
  .catch(error => {
    console.error(error); // If there's an error, it will be logged to the console
  });
