const HeaderMenu = () => {
    return (
        <header id="masterHeader" className="header border-bottom d-print-none">
            <nav className="navbar navbar-expand-lg navbar-light py-3 py-lg-0">
                <div className="container-xxl position-relative">
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav gap-1 gap-lg-0 pt-4 pt-lg-0">
                            <li className="nav-item">
                                <a href="https://etherscan.io/" id="LI_default" className="nav-link active" aria-current="page">
                            Home
                            </a>
                            </li>
                            <li className="nav-item dropdown">
                            <a id="LI_blockchain" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Blockchain</a>
                            <ul className="dropdown-menu dropdown-menu-border" style={{minWidth: "14rem"}}>
                            <li>
                            <a href="https://etherscan.io/txs" id="LI12" className="dropdown-item">
                            Transactions
                            </a>
                            </li>
                            <li>
                            <a href="https://etherscan.io/txsPending" id="LI16" className="dropdown-item">
                            Pending Transactions
                            </a>
                            </li>
                            <li>
                            <a href="https://etherscan.io/txsInternal" id="LI14" className="dropdown-item">
                            Contract Internal Transactions
                            </a>
                            </li>
                            <li>
                            <a href="https://etherscan.io/txsBeaconDeposit" id="LI22" className="dropdown-item">
                            Beacon Deposits
                            </a>
                            </li>
                            <li>
                            <a href="https://etherscan.io/txsBeaconWithdrawal" id="LI_BeaconWithdrawals" className="dropdown-item">
                            Beacon Withdrawals
                            </a>
                            </li>
                            <li>
                            <hr className="dropdown-divider" />
                            </li>
                            <li>
                            <a href="https://etherscan.io/blocks" id="LI_blocks" className="dropdown-item">
                            View Blocks
                            </a>
                            </li>
                            <li>
                            <a href="https://etherscan.io/blocks_forked" id="LI_blocks2" className="dropdown-item">
                            Forked Blocks (Reorgs)
                            </a>
                            </li>
                            <li>
                            <a href="https://etherscan.io/uncles" id="LI8" className="dropdown-item">
                            Uncles
                            </a>
                            </li>
                            <li>
                            <hr className="dropdown-divider" />
                            </li>
                            <li>
                            <a href="https://etherscan.io/accounts" id="LI_accountall" className="dropdown-item">
                            Top Accounts
                            </a>
                            </li>
                            <li>
                            <a href="https://etherscan.io/contractsVerified" id="LI_contract_verified" className="dropdown-item">
                            Verified Contracts
                            </a>
                            </li>
                        </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a id="LI_tokens" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tokens</a>
                            <ul className="dropdown-menu dropdown-menu-border" style={{minWidth: "14rem"}}>
                        <li>
                            <a href="https://etherscan.io/tokens" id="LI21" className="dropdown-item">
                            Top Tokens <span className="small text-muted">(ERC-20)</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://etherscan.io/tokentxns" id="LI1" className="dropdown-item">
                            Token Transfers <span className="small text-muted">(ERC-20)</span>
                            </a>
                        </li>
                        </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a id="LI_Nfts" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">NFTs</a>
                            <ul className="dropdown-menu dropdown-menu-border" style={{minWidth: "14rem"}}>
                        <li>
                            <a href="https://etherscan.io/nft-top-contracts" id="LI63" className="dropdown-item">
                            Top NFTs
                            </a>
                        </li>
                        <li>
                            <a href="https://etherscan.io/nft-top-mints" id="LI67" className="dropdown-item">
                            Top Mints
                            </a>
                        </li>
                        <li>
                            <a href="https://etherscan.io/nft-trades" id="LI64" className="dropdown-item">
                            Latest Trades
                            </a>
                        </li>
                        <li>
                            <a href="https://etherscan.io/nft-transfers" id="LI65" className="dropdown-item">
                            Latest Transfers
                            </a>
                        </li>
                        <li>
                            <a href="https://etherscan.io/nft-latest-mints" id="LI66" className="dropdown-item">
                            Latest Mints
                            </a>
                        </li>
                        </ul>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default HeaderMenu;