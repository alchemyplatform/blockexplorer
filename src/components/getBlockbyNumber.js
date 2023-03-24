const getBlockbyNumber = async(blockNum) => {
    const Web3 = require('web3');
    const  url = "https://eth-mainnet.g.alchemy.com/v2/TTLLqv5MxV8X-bMTZpWG70XuItqDGRTo";
    const web3 = new Web3(url);
    const blockData =await  web3.eth.getBlock(blockNum ,true)
    const numberOfTxns = blockData.transactions.length;
    const getFeeInWei = await blockData.baseFeePerGas;
    const gasin = web3.utils.fromWei(String(getFeeInWei) , 'gwei')
    const timestamp = blockData.timestamp;
    const totalDifficulty = blockData.totalDifficulty;
    const BlockGasLimit = blockData.gasLimit;
    const BlockSpaceUsed = blockData.gasUsed;
    const blockFilledPecent = (BlockSpaceUsed*100)/BlockGasLimit;

    const BlockDataObj = {
        baseFeePerGas: gasin,
        txnCount: numberOfTxns,
        gasLimit: BlockGasLimit,
        gasUsed:BlockSpaceUsed,
        blockFilledPecent: `${blockFilledPecent}%`,
        timestamp:timestamp,
        totalDifficulty:totalDifficulty
    }
     return (BlockDataObj)
} 

export default getBlockbyNumber;