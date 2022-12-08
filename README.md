# Building a blockexplorer

This repo provides starter code for a blockexplorer using a React front-end and the AlchemySDK for communicating with the Ethereum Network.

Blockexplorers give us the ability to view lots of different information about the blockchain including data about:
  * the blockchain network itself
  * blocks in the blockchain
  * transactions in a block
  * accounts
  * and many other things
  
[Etherscan](https://etherscan.io/) is a good example of an Ethereum blockexporer. You can take inspiration from Etherscan as you build your own.

In this repo we chose to use React for a front-end and added minimal front-end code to get you going, but feel free to use any front-end stack you like.

The lessons this week covered the `ethers.js` library. In this project, the starter code here uses the [AlchemySDK](https://docs.alchemy.com/reference/alchemy-sdk-quickstart?a=eth-bootcamp) instead of `ethers.js`, but the AlchemySDK's core package wraps almost all of the `ethers.js` provider functionality that we learned about and should feel very familiar to you. 

For example, the following `ethers.js` code
```js
const blockNumber = await provider.getBlockNumber();
```
can be written using the AlchemySDK like so:
```js
const blockNumber = await alchemy.core.getBlockNumber()
```
Another `ethers.js ` example
```js
const transcations = await provider.getBlockWithTransactions(SOME_BLOCK_NUMBER)
```
translates to
```js
const transactions = await alchemy.core.getBlockWithTransactions(SOME_BLOCK_NUMBER)
```
and so on.


There are some `ethers.js` provider functions that are not often-used and therefore not included in `alchemy.core`. But if you ever need the full ethers provider functionality you can access the provider directly with the following code:
```js
const ethersProvider = await alchemy.config.getProvider();
```

You can find lots of good docs on the AlchemySDK here:
  * [API Quickstart](https://docs.alchemy.com/reference/alchemy-sdk-quickstart?a=eth-bootcamp)
  * [API Overview](https://docs.alchemy.com/reference/api-overview?a=eth-bootcamp)

By using the AlchemySDK you can really supercharge your projects with additional\
API functionality that isn't included in the `ethers.js` package including:
  * NFT methods
  * WebSocket methods
  * Alchemy's Transact API functionality
  * endpoints for usign Alchemy's Notify Webhooks.

Read more about the above in the [Alchemy SDK Surface docs](https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview?a=eth-bootcamp).

## 1. Create a unique Alchemy API key

For the purposes of this project we'll use Ethereum Mainnet.

If you have not already done so, create a unique Alchemy API Mainnet key
for your project as [described here](https://docs.alchemy.com/reference/api-overview?a=eth-bootcamp).

## 2. Add your API key to an environment variable

Create an empty `.env` file in the base directory of this project.

Add the following line to the `.env` file replacing `YOUR_ALCHEMY_API_KEY` with your api key.

```sh
REACT_APP_ALCHEMY_API_KEY=YOUR_ALCHEMY_API_KEY
```

Do not remove the `REACT_APP_` prefix. React uses that to import env variables.


**⚠️ Note**

> Your Alchemy API Mainnet Key is a sensitive piece of data. If we were\
> building an enterprise app to conquer the world we would never place\
> this sensitive data in the client code of our blockexplorer project that\
> could potentially be read by anyone.
>
> But hey, we're just learning this stuff right now, not conquering anything\
> yet! :-) It won't be the end of the world to put the Alchemy API key in our\
> front-end code for this project.

## 3. Start the webserver

`npm start`

Running the command above will run the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

## 4. Display interesting information about the blockchain

You can really use your imagination here, but some ideas to think about are:
  * details about the Ethereum network itself (eg: one data point can be fetched with [alchemy.core.getBlockNumber()](https://docs.alchemy.com/reference/sdk-getblocknumber))
  * details about Blocks ([alchemy.core.getBlock()](https://docs.alchemy.com/reference/sdk-getblock?a=eth-bootcamp))
  * details about Transactions ([alchemy.core.getTransactionReceipt()](https://docs.alchemy.com/reference/sdk-gettransactionreceipt?a=eth-bootcamp))

## 5. AlchemySDK bonus questions

  * Did a pending transaction get mined?
  * What NFTs and tokens does an address own?
  * What transfers did an address receive this year?
  * What is the floor price of an NFT right now?



