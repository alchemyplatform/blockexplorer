import { Alchemy, Network } from "alchemy-sdk";
import { Utils } from "alchemy-sdk";
import { useState } from "react";
import MoreInfoTx from "./MoreInfoTx";

export const Transactions = (props) => {
    let i = 0;

    const settings = {
        apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
        network: Network.ETH_MAINNET,
    };

    const alchemy = new Alchemy(settings);

    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [amount, setAmount] = useState(0);
    const [selectedIndex, setSelected] = useState(null)

    async function getMoreInfo(hash) {
        try {
            const response = await alchemy.core.getTransaction(hash)
            setFrom(response.from);
            setTo(response.to);
            setAmount(Utils.formatEther(parseInt(response.value._hex).toString()));
            setSelected(hash);
        } catch {
            alert("something went wrong")
        }
    }

    return (
        <div className="transactions">
            <h1>Transactions:</h1>
            {props.txs.map((el, i) => {
                return (
                    <ul key={i}>
                        {el}{" "}
                        <button
                            onClick={() => {
                                getMoreInfo(el);
                            }}
                        >
                            More Info
                        </button>
                        {selectedIndex === el && (
                            <MoreInfoTx from={from} to={to} amount={amount} />
                        )}
                    </ul>
                );
            })}
        </div>
    )
}

export default Transactions;