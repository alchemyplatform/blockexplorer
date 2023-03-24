const getTransactionDetails = async (txhash) =>{
    const Web3 = require('web3');
    const  url = "https://eth-mainnet.g.alchemy.com/v2/TTLLqv5MxV8X-bMTZpWG70XuItqDGRTo";
    const web3 = new Web3(url);
    const txHash = await web3.eth.getTransaction(txhash);
    const sender = txHash.from;
    const receiver = txHash.to;
    const inBlock = txHash.blockNumber;
    const inBlockHash = txHash.blockHash;
    const maxFeePerGas = txHash.maxFeePerGas;
    const nonce = txHash.nonce;
    const indexInBlock = txHash.transactionIndex;
    const amountInETH = web3.utils.fromWei(txHash.value,'ether');
    const txHashObj = {
        sender:sender,
        receiver:receiver,
        inBlock:inBlock,
        inBlockHash:inBlockHash,
        maxFeePerGas:maxFeePerGas,
        nonce:nonce,
        indexInBlock:indexInBlock,
        amountInETH:amountInETH
    }
    return txHashObj;
}
export default getTransactionDetails;