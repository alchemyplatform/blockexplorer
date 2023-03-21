import React, { useState, useEffect } from 'react';
import getBalance from './components/getBalance';
var Web3 = require('web3');


function App() {
  const [gasPrice, setGasPrice] = useState('Loading');
  const[blockNumber , setBlockNumber] = useState('Loading')
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState(':');

  const web3 = new Web3("https://eth-mainnet.g.alchemy.com/v2/TTLLqv5MxV8X-bMTZpWG70XuItqDGRTo");

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
        Let's get the balance of an address<br />
        <input type="text" value={address} onChange={handleAddressChange} placeholder='Paste the Ethereum address here' />
        Make sure to click the grey colored button below to fetch balance <br/><br/>
        <button onClick={handleClick}>Get balance</button> <br />
        
        The balance of the <br/>address {address} is :{balance} ETH
      </p>
    </div>
  )
}
export default App;
