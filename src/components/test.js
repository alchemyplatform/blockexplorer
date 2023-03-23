
/*const TxnIndexer = async() => {
const url = `https://api.etherscan.io/api?module=account&action=txlist&address=0x75A3102c7c07E2d96122271BA8fd223A7ee5C47a&startblock=0&endblock=99999999&page=1&offset=2&sort=desc&apikey=5IMPDY87QQDCPK613FP5X9EDZ9JA1NIRQ3`;
const newWeb3 = require('web3');
const  url2 = "https://eth-mainnet.g.alchemy.com/v2/TTLLqv5MxV8X-bMTZpWG70XuItqDGRTo";
const web3 = new newWeb3(url2);
fetch(url)
  .then(response => response.json())
  .then(data => {
    let arr = [];
    /*let Stats = {};
    let traverse = data.result[0];
    //let txnFees = (traverse.gasUsed)*(traverse.gasPrice);
    //Stats.showFees = web3.utils.fromWei(String(txnFees),'ether');
    Stats.blockNumber = traverse.blockNumber;
    Stats.timeStamp = traverse.timeStamp;
    Stats.hash = traverse.hash;
    Stats.nonce = traverse.nonce;
    Stats.sender = traverse.from;
    Stats.receiver = traverse.to;
    
     return (data.result[0])
      
    
  })
  .catch(error => {
    console.error(error); // If there's an error, it will be logged to the console
  });
}*/

