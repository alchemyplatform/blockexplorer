import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';

import './App.css';

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const config = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};


// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(config);

function App() {
  const [blockNumber, setBlockNumber] = useState();
  const [blockDetails, setBlockDetails] = useState([]);
  const [nonce, setNonce] = useState();

   //function for getting the blockNumber
  async function getBlockNumber() {
    setBlockNumber(await alchemy.core.getBlockNumber());;
  }

  useEffect(() => {
    getBlockNumber();
  });


  //function for getting the details of the block  
 async function getBlockDetails(blockNumber){ 
   const response = await alchemy.core.getBlock(parseInt(blockNumber))
   setBlockDetails(response)
  console.log(blockDetails)
 }



  return (
  <div>
     <h1 className='heading'>Welcome to CUSTOM BLOCK EXPLORER!</h1>
    <div className="App">Block Number: {blockNumber}</div>
    <div className='fetch_button'>
    <button onClick={getBlockDetails} > Get Details </button>
    </div>
    <div>Block's hash: {blockDetails.hash}</div>
    <div>Block's nonce: {blockDetails.nonce}</div>
    <div>Block's timestamp: {blockDetails.timestamp} </div>
    <div> Block's Miner: {blockDetails.miner}</div>
  </div>
  )
}

export default App;
