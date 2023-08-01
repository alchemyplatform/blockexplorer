const Search = () => {
    return (
        <section className="bg-dark pt-14 pb-20">
            <div className="container-xxl">
               <div className="row justify-content-between align-items-center">
                  <div className="col-md-9 col-lg-7 mb-5">
                     <h1 className="fs-lg text-white fw-medium mb-3">
                        The Ethereum Blockchain Explorer
                     </h1>
                     <form className="mb-3" action="https://etherscan.io/search" method="GET">
                        <div className="search-panel-container bg-white border rounded d-flex gap-2 p-1.5">
                           <div className="d-none d-sm-block">
                              <select name="f" className="form-select fs-base border-0 filterby" aria-label="Default select example">
                                 <option selected="" value="0">All Filters</option>
                                 <option value="1">Addresses</option>
                                 <option value="2">Tokens</option>
                                 <option value="3">Name Tags</option>
                                 <option value="6">Domain Names</option>
                                 <option value="4">Labels</option>
                                 <option value="5">Websites</option>
                              </select>
                           </div>
                           <div className="flex-grow-1 position-relative auto-search-max-height">
                              <label for="search-panel" className="visually-hidden">Search</label>
                              <input id="search-panel" type="text" className="form-control fs-base border-0 pe-8" autocomplete="off" spellcheck="false" placeholder="Search by Address / Txn Hash / Block / Token / Domain Name" aria-describedby="button-header-search" maxlength="68" />
                           </div>
                           <div>
                              <button className="btn btn-primary" type="submit">
                              <i className="fa fa-search"></i>
                              </button>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </section>
    );
}

export default Search;