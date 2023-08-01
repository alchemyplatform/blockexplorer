const TransactionsSummaryWidget = () => {
    return (
        <div id="ContentPlaceHolder1_divTxnStats" className="row g-4 mb-4">
            <div className="col-sm-6 col-lg-3">
                <a className="card group link-dark h-100" href="https://etherscan.io/chart/tx">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                        <h6 className="text-cap mb-0">Transactions (24H)</h6>
                        <i className="far fa-arrow-up-right text-secondary group-hover"></i>
                        </div>
                        <div>
                        <span className="fs-5">
                        1,048,101
                        </span>
                        <span className="text-nowrap text-success small">(6.82%)</span>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-sm-6 col-lg-3">
                <a className="card group link-dark h-100" href="https://etherscan.io/chart/pendingtx">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                        <h6 className="text-cap mb-0">Pending Transactions (Last 1H)</h6>
                        <i className="far fa-arrow-up-right text-secondary group-hover"></i>
                        </div>
                        <div>
                        <span className="fs-5">
                        158,084
                        </span>
                        <span className="text-nowrap small">(Average)</span>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-sm-6 col-lg-3">
                <a className="card group link-dark h-100" href="https://etherscan.io/chart/transactionfee">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                        <h6 className="text-cap mb-0">Network Transactions Fee (24H)</h6>
                        <i className="far fa-arrow-up-right text-secondary group-hover"></i>
                        </div>
                        <div>
                        <span className="fs-5" data-bs-toggle="tooltip" data-bs-title="490.648311662815153633 ETH">
                        490.65 ETH
                        </span>
                        <span className="text-nowrap text-danger small">(23.32%)</span>
                        </div>
                    </div>
                </a>
            </div>
            <div className="col-sm-6 col-lg-3">
            <a className="card group link-dark h-100" href="https://etherscan.io/chart/avg-txfee-usd">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                    <h6 className="text-cap mb-0">Avg. Transaction Fee (24h)</h6>
                    <i className="far fa-arrow-up-right text-secondary group-hover"></i>
                    </div>
                    <div>
                    <span className="fs-5" data-bs-toggle="tooltip" data-bs-title="5.3505708809898819093345231805 USD">
                    5.35 USD
                    </span>
                    <span className="text-nowrap text-success small">(3.33%)</span>
                    </div>
                </div>
            </a>
            </div>
        </div>
    );
}

export default TransactionsSummaryWidget;