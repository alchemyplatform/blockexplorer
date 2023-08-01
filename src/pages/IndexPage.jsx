import Blocks from "../components/Blocks";
import Container from "../components/Container";
import EthMarketSummary from "../components/EthMarketSummary";
import Transactions from "../components/Transactions";

const IndexPage = () => {
    return (
        <>
            <Container>
                <section class="container-xxl pb-20">
                    <EthMarketSummary />
                    <div class="row gx-4">
                    <Blocks />
                    <Transactions />
                    </div>
                </section>
            </Container>
        </>
    );
}

export default IndexPage;