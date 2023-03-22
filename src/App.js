import React, { useState, useEffect } from 'react';
import getBalance from './components/getBalance';
import getBlockbyNumber from './components/getBlockbyNumber';
import getTransactionDetails from './components/getTransactionDetails';
var Web3 = require('web3');

//use inside style if you wish background: "linear-gradient(to left, #003973, #000000)"
// background: "linear-gradient(to bottom right, #003973, #E5E5BE)",

function App() {
  const web3 = new Web3("https://eth-mainnet.g.alchemy.com/v2/TTLLqv5MxV8X-bMTZpWG70XuItqDGRTo");
  
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState('');

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
    setBalance('Please wait fetching balance');
  }
  const handleClick = async () => {
    const balance = await getBalance(address);
    setBalance(balance);
  }

  const[inputBlock , setBlockas] = useState();
  const[blockResult, showBlockData] = useState('');

  
  const handleBlockBox = (event) => {
    setBlockas(event.target.value);
    showBlockData("please wait")
  };

  const handleBlockResult = async () => {
    const blockData = await getBlockbyNumber(inputBlock);
    showBlockData(blockData);
  };

  const [gasPrice, setGasPrice] = useState('Loading');
  const[blockNumber , setBlockNumber] = useState('Loading')

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

  const[txHashBox , setTxHashTo] = useState();
  const[txHashDetails, showTxDetails] = useState('');

  const handleTxBox = (box) => {
    setTxHashTo(box.target.value);
    showTxDetails('Please wait')
  }

  const handleTxBoxClick = async() => {
    const txHashDetails = await getTransactionDetails(txHashBox);
    showTxDetails(txHashDetails);
  }

  

  return (
    <div>
    <div
      style={{
        background: "linear-gradient(to left, #003973, #000000)",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h1 style={{ color: "cyan" }} align="center">
        Welcome to Ethereum Block Explorer created by @0xTheKnightmare on Twitter
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
        <button onClick={handleClick}>Click to get the <br/>ethereum balance of the address</button> <br /><br/>
        
        The balance of the <br/>address {address} is :{balance.balanceInEth} ETH <br/>and this address has sent {balance.transfersOut} transactions out
      </p>
    </div>
    <div
  style={{
    background: "linear-gradient(to left, #003973, #000000)",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    borderTop: "5px solid cyan",
     margin: 'auto'
  }}>
    <h1 style={{ color: "cyan" }} align ="center">Block Info</h1><br/>
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
        <td style={{ border: '2px solid cyan', padding: '8px', paddingLeft: '150px' }}>{blockResult.txnCount}</td>
        <td style={{ border: '2px solid cyan', padding: '12px' }}>{blockResult.gasLimit}</td>
        <td style={{ border: '2px solid cyan', padding: '12px' }}>{blockResult.gasUsed}</td>
        <td style={{ border: '2px solid cyan', padding: '8px' }}>{blockResult.blockFilledPecent}</td>
        <td style={{ border: '2px solid cyan', padding: '8px' }}>{new Date(blockResult.timestamp * 1000).toString()}</td>
        <td style={{ border: '2px solid cyan', padding: '8px' }}>{blockResult.totalDifficulty}</td>
      </tr>
    </tbody>
  </table>
    </div>
    <div
  style={{
    background: "linear-gradient(to left, #003973, #000000)",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    borderTop: "5px solid cyan",
     margin: 'auto'
  }}>
<h1 style={{ color: "cyan" }} align  ="center">Transaction Hash Info</h1>
    <input type="text" value={inputBlock} onChange={handleTxBox} placeholder='Paste theTransaction Hash here' />
    <button onClick={handleTxBoxClick}>Click to know Transaction hash Block Info</button> <br />
    <table style={{ border: '2px solid cyan', borderCollapse: 'collapse', width: '100%' }}>
    <thead>
      <tr>
        <th style={{ border: '2px solid cyan', padding: '8px' }}>Address of Sender</th>
        <th style={{ border: '2px solid cyan', padding: '8px' }}>Address of receiver</th>
        <th style={{ border: '2px solid cyan', padding: '8px' }}>Amount sent by Sender</th>
        <th style={{ border: '2px solid cyan', padding: '8px' }}>Block Number of the given txnHash</th>
        <th style={{ border: '2px solid cyan', padding: '8px' }}>Price Per Gas at the time of Txn</th>
        <th style={{ border: '2px solid cyan', padding: '8px' }}>nonce</th>
        <th style={{ border: '2px solid cyan', padding: '8px' }}>Position of transaction in the Txn array</th>
      </tr>
    </thead>
    <tbody>
      <tr>
      <td style={{ border: '2px solid cyan', padding: '8px' }}>{txHashDetails.sender}</td>
        <td style={{ border: '2px solid cyan', padding: '8px', }}>{txHashDetails.receiver}</td>
        <td style={{ border: '2px solid cyan', padding: '12px' }}>{txHashDetails.amountInETH} ETH</td>
        <td style={{ border: '2px solid cyan', padding: '12px' }}>{txHashDetails.inBlock}</td>
        <td style={{ border: '2px solid cyan', padding: '8px' }}>{txHashDetails.maxFeePerGas}</td>
        <td style={{ border: '2px solid cyan', padding: '8px' }}>{txHashDetails.nonce}</td>
        <td style={{ border: '2px solid cyan', padding: '8px' }}>{txHashDetails.indexInBlock} yo</td>
      
        </tr>
    </tbody>
  </table>
</div>

    </div>

    
  )
  
}
export default App;
