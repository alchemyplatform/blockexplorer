# Building a blockexplorer

This repo provides starter code for a blockexplorer using a React front-end
and the AlchemySDK for communicating with the Ethereum Network.

Feel free to use any front-end you like. It doesn't need to be React, but\
that's what we chose here.

The lessons this week covered the `ethers.js` library. The starter code here
uses the AlchemySDK. The AlchemySDK's core package wraps almost all of the\
`ethers.js` provider functionality that we studied. 

For example, the following `ethers.js` code
```js
const blockNumber = await provider.getBlockNumber();
```
can be written using the AlchemySDK like so:
```js
const blockNumber = await alchemy.core.getBlockNumber()
```

There are some `ethers.js` provider functions that are not often-used and\
therefore not included in `alchemy.core`. But if you ever need the full\
ethers provider functionality you can access the provider directly with the\
following code:
```js
const ethersProvider = await alchemy.config.getProvider();
```

You can find lots of good docs on the AlchemySDK here:
  * [API Quickstart](https://docs.alchemy.com/reference/alchemy-sdk-quickstart)
  * [API Overview](https://docs.alchemy.com/reference/api-overview)

By using the AlchemySDK you can really supercharge your projects with additional\
API functionality that isn't included in the `ethers.js` package including:
  * NFT methods
  * WebSocket methods
  * Alchemy's Transact API functionality
  * endpoints for usign Alchemy's Notify Webhooks.

Read more about the above in the [Alchemy SDK Surface docs](https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview).

## 1. Create a unique Alchemy API key

For the purposes of this project we'll use Ethereum Mainnet.

If you have not already done so, create a unique Alchemy API Mainnet key\
for your project as [described here](https://docs.alchemy.com/reference/api-overview).

## 2. Add your API key to an environment variable

Create an empty `.env` file in the base directory of this project.

Add the following line to the `.env` file replacing `YOUR_ALCHEMY_API_KEY`\
with your api key.

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

Running the command above will run the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## 4. Display interesting information about the blockchain

You can really use your imagination here, but some ideas to think about are:
  * details about the Ethereum network itself
  * details about Blocks
  * details about Transactions

## 5. AlchemySDK bonus questions

  * Did a pending transaction get mined?
  * What NFTs and tokens does an address own?
  * What transfers did an address receive this year?
  * What is the floor price of an NFT right now?



