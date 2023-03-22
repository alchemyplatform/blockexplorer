//const address = "0x0Fd40853B3B8c7805158b862B76B35A2a27B596A";
//const ContractAddress = "0x07a27472f5C3B6e494c865aDd34C4e1c8C14EB2e";


//const contract = new web3.eth.Contract(abi.abi , ContractAddress)
async function GetBalance() {

 const Web3 = require('web3');
const  url = "https://eth-mainnet.g.alchemy.com/v2/TTLLqv5MxV8X-bMTZpWG70XuItqDGRTo";
const web3 = new Web3(url);
const x = await web3.eth.getGasPrice();
const gasin = web3.utils.fromWei(x , 'gwei')
 console.log(gasin)
    
  }
  GetBalance();
//export default GetBalance;