const EthMarketSummary = () => {
    return (
      <div id="ContentPlaceHolder1_mainboxes" className="card py-5 px-4 mb-4 mt-n12">
         <div className="row g-lg-10">
            <div className="col-md-4 col-lg-4">
               <div className="d-flex">
                  <div className="text-center me-3" style={{width: "1.5rem"}}>
                        <img className="img-fluid mx-auto" src="/images/svg/brands/ethereum-original-light.svg" alt="Ethereum Logo" />
                  </div>
                  <div className="flex-grow-1">
                     <div className="text-cap mb-px">Ether Price</div>
                     <a className="link-dark fs-base" href="https://etherscan.io/chart/etherprice" rel="tooltip" data-bs-toggle="tooltip" data-bs-placement="bottom">$1,866.24<span className="text-muted"> @ 0.06343 BTC</span><span className="text-danger small"> (-0.49%)</span></a>
                  </div>
               </div>
               <hr className="my-5" />
               <div className="d-flex">
                  <div className="me-3">
                     <i className="fa fa-globe fa-lg" style={{fontSize: "1.5rem"}}></i>
                  </div>
                  <div className="flex-grow-1">
                     <div className="text-cap mb-px">Market Cap</div>
                     <a className="link-dark fs-base" href="https://etherscan.io/stat/supply">
                     $224,281,924,678.00</a>
                  </div>
               </div>
            </div>
            <div className="col-md-8 col-lg-8">
               <hr className="d-block d-md-none my-5" />
               <div className="d-flex">
                  <div className="me-3">
                     <i className="fa fa-server fa-lg" style={{fontSize: "1.5rem"}}></i>
                  </div>
                  <div className="flex-grow-1">
                     <div className="text-cap mb-px">Transactions</div>
                     <a href="https://etherscan.io/txs" className="link-dark fs-base" rel="tooltip" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-html="true">2,047.64 M</a><span className="text-muted small" style={{fontSize:"14px"}}> (11.2 TPS)</span>
                  </div>
                  <div className="text-end">
                     <div className="text-cap mb-px">Med Gas Price</div>
                     <a href="https://etherscan.io/gastracker" className="link-dark fs-base" data-bs-toggle="tooltip" data-bs-html="true">14 Gwei <span className="text-muted small" style={{fontSize:"14px"}}>($0.55)</span></a>
                  </div>
               </div>
               <hr className="my-5" />
               <div className="d-flex">
                  <div className="me-3">
                     <i className="fa fa-thermometer-full fa-lg" style={{fontSize: "1.5rem"}}></i>
                  </div>
                  <div className="flex-grow-1">
                     <div className="text-cap mb-px">Last Finalized Block</div>
                     <span rel="tooltip" className="fs-base" data-bs-toggle="tooltip" data-bs-placement="bottom" >17811132</span>
                  </div>
                  <div className="text-end">
                     <div className="text-cap mb-px">Last Safe Block</div>
                     <span rel="tooltip" className="fs-base" data-bs-toggle="tooltip" data-bs-placement="bottom">17811196</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
    );
}

export default EthMarketSummary;