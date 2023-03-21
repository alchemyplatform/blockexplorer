var Web3 = require('web3');
var  url = "https://mainnet.infura.io/v3/0a235cbf75a74c02911b99d2a59309c6";
var web3 = new Web3(url);
var address = "0xDEF802e55FAE93563e53B367D946b11Ba172C996";
var balance = web3.eth.getBalance(address , (err, bal)=> {balance  = bal});
console.log(web3.eth.getBalance(address, (err,bal) => {balance = bal}));


