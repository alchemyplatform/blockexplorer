// Imports the Alchemy SDK
const { Alchemy, Network } = require("alchemy-sdk");

// Configures the Alchemy SDK
const config = {
    apiKey: "alchemy-replit", // Replace with your API key
    network: Network.ETH_MAINNET, // Replace with your network
};

// Creates an Alchemy object instance with the config to use for making requests
const alchemy = new Alchemy(config);

const main = async () => {
    //Assign the hash to a variable
    let txHash = "0x92fc42b9642023f2ee2e88094df80ce87e15d91afa812fef383e6e5cd96e2ed3"

    //Response would return the block for provided hash
    let response = await alchemy.core.getBlock(txHash)

    //Logging the response to the console
    console.log(response)
};

main();