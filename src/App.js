import React, { useState, useEffect } from 'react';
import getBalance from './components/getBalance';
import getBlockbyNumber from './components/getBlockbyNumber';
var Web3 = require('web3');


function App() {
  const [gasPrice, setGasPrice] = useState('Loading');
  const[blockNumber , setBlockNumber] = useState('Loading')
  
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState(':');

  const[inputBlock , setBlockas] = useState();
  const[blockResult, showBlockData] = useState('');

  const web3 = new Web3("https://eth-mainnet.g.alchemy.com/v2/TTLLqv5MxV8X-bMTZpWG70XuItqDGRTo");
  const handleBlockBox = (event) => {
    setBlockas(event.target.value);
    showBlockData("please wait")
  };

  const handleBlockResult = async () => {
    const blockData = await getBlockbyNumber(inputBlock);
    showBlockData(JSON.parse(blockData));
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
    setBalance('Please wait fetching balance');
  }
  const handleClick = async () => {
    const balance = await getBalance(address);
    setBalance(balance);
  }
  useEffect(() => {
    const intervalId = setInterval(async () => {
      const gasPrice = await web3.eth.getGasPrice();
      const blockNumber = await web3.eth.getBlockNumber();
      const showGas = web3.utils.fromWei(gasPrice,"gwei")
      setGasPrice(showGas);
      setBlockNumber(blockNumber);
    }, 3000);

    return () => clearInterval(intervalId);
  },);


  return (
    <div>
    <div
      style={{
        background: "linear-gradient(to left, #903AB7 20%, #2A1B9A 80%)",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h1 style={{ color: "cyan" }}>
        The stats are set to auto refresh using react hooks, every 10 seconds
      </h1>
      <p>
        Gas Price is: <strong>{gasPrice} Gwei</strong>
      </p>
    
      <p>
        Latest Mined Block Number is: <strong>{blockNumber}</strong>
      </p>
      <p>
        Let's get the balance of an address<br /><br/>
        Make sure to click the grey colored button below to fetch balance <br/><br/>
        Goto <a style={{color:'white'}} href="https://etherscan.io"  target="_blank" rel="noopener noreferrer">Etherscan.io</a> to pick any address and paste it below<br/>
        <input type="text" value={address} onChange={handleAddressChange} placeholder='Paste the Ethereum address here' />
        <button onClick={handleClick}>Get balance</button> <br /><br/>
        
        The balance of the <br/>address {address} is :{balance} ETH
      </p>
    </div>
    <div
  style={{
    background: "linear-gradient(to left, #903AB7 20%, #2A1B9A 80%)",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    borderTop: "5px solid cyan",
     margin: 'auto'
  }}
>
      <h1 align ="center">Block Info</h1><br/>

      <input type="text" value={inputBlock} onChange={handleBlockBox} placeholder='Paste the Block Number here' />
    <button onClick={handleBlockResult}>Click to know brief Block Info</button> <br />
    <table style={{ border: '2px solid cyan', borderCollapse: 'collapse', width: '100%' }}>
    <thead>
      <tr>
        <th style={{ border: '2px solid cyan', padding: '8px' }}>Base Fee Per Gas</th>
        <th style={{ border: '2px solid cyan', padding: '8px' }}>Number of transactions in the block</th>
        <th style={{ border: '2px solid cyan', padding: '8px' }}>Gas Limit</th>
        <th style={{ border: '2px solid cyan', padding: '8px' }}>Gas Used</th>
        <th style={{ border: '2px solid cyan', padding: '8px' }}>Block Filled Percent</th>
        <th style={{ border: '2px solid cyan', padding: '8px' }}>Block Mined At</th>
        <th style={{ border: '2px solid cyan', padding: '8px' }}>Total Difficulty</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ border: '2px solid cyan', padding: '8px' }}>{parseFloat(blockResult.baseFeePerGas).toFixed(8)}</td>
        <td style={{ border: '2px solid cyan', padding: '8px', paddingLeft: '40px' }}>{blockResult.txnCount}</td>
        <td style={{ border: '2px solid cyan', padding: '12px' }}>{blockResult.gasLimit}</td>
        <td style={{ border: '2px solid cyan', padding: '12px' }}>{blockResult.gasUsed}</td>
        <td style={{ border: '2px solid cyan', padding: '8px' }}>{blockResult.blockFilledPecent}</td>
        <td style={{ border: '2px solid cyan', padding: '8px' }}>{new Date(blockResult.timestamp * 1000).toString()}</td>
        <td style={{ border: '2px solid cyan', padding: '8px' }}>{blockResult.totalDifficulty}</td>
      </tr>
    </tbody>
  </table>
    </div>
    </div>

    
  )
  
}
export default App;
