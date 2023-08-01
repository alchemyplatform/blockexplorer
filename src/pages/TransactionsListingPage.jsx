import Container from "../components/Container";
import TransactionsListing from "../components/TransactionsListing";
import TransactionsSummaryWidget from "../components/TransactionsSummaryWidget";

const TransactionsListingPage = () => {
    return (
        <Container>
            <section class="container-xxl pb-20">
                <TransactionsSummaryWidget />
                <TransactionsListing />
            </section>
        </Container>
    );
}

export default TransactionsListingPage;