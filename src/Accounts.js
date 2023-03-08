
import { Alchemy, Network } from "alchemy-sdk";
import { useState } from "react";
import { Utils } from "alchemy-sdk";

export const Accounts = () => {
    const settings = {
        apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
        network: Network.ETH_MAINNET,
    };

    const alchemy = new Alchemy(settings);

    let [balance, setBalance] = useState(null);
    let [userAddress, setUserAddress] = useState("");
    let [showBalance, setShowBalance] = useState(false);
    let [showNFTs, setShowNFTs] = useState(false);
    let [ownedNFTs, setOwnedNFTs] = useState(null);

    async function getBalance(address) {
        try {
            let response = await alchemy.core.getBalance(address, "latest");
            setBalance(Utils.formatEther(parseInt(response._hex).toString()));
            if (showBalance === true) return;
            else setShowBalance(!showBalance);
        } catch {
            alert("Error. This wallet probably doesn't exist.");
            setShowBalance(false);
            setShowNFTs(false);
        }
    }

    async function getNFTs(address) {
        try {
            let response = await alchemy.nft.getNftsForOwner(address);
            console.log(response);
            setOwnedNFTs(response.totalCount);
            if (showNFTs === true) return;
            else setShowNFTs(!showNFTs);
        } catch {
            alert("Error. This wallet probably doesn't exist.");
            setShowBalance(false);
            setShowNFTs(false);
        }
    }

    return (
        <div className="accounts">
            <label>
                ETH Address:
                <br></br>
                <input
                    type="text"
                    placeholder="0x..."
                    onChange={(e) => {
                        setUserAddress(e.target.value);
                    }}
                />
            </label>
            <button
                onClick={() => {
                    getBalance(userAddress);
                }}
            >
                Get Balance
            </button>
            <br></br>
            {showBalance ? (
                `This wallet has a balance of ${balance} ETH`
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default Accounts;