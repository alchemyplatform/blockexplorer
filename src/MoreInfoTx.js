export const MoreInfoTx = (props) => {
    return (
        <div>
            <div>From: {props.from}</div>
            <div>To: {props.to}</div>
            <div>Amount: {props.amount} ETH</div>
        </div>
    );
};

export default MoreInfoTx;