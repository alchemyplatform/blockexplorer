const getTransactionDetails = async () =>{
    const Web3 = require('web3');
    const  url = "https://eth-mainnet.g.alchemy.com/v2/TTLLqv5MxV8X-bMTZpWG70XuItqDGRTo";
    const web3 = new Web3(url);
    const txHash = await web3.eth.getTransaction("0x251017b38ccfd3e1903f83ee11bd361c6053593ad08067f380611c781ce2d017");
    const sender = txHash.from;
    const receiver = txHash.to;
    const inBlock = txHash.blockNumber;
    const inBlockHash = txHash.blockhash;
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
    return (txHashObj)
}

getTransactionDetails();