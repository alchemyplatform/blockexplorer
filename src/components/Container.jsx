import Footer from "./Footer";
import HeaderMenu from "./HeaderMenu";
import Search from "./Search";
import TopEthAndGasPriceWidget from "./TopEthAndGasPriceWidget";

const Container = ({ children }) =>  {
    return (
        <>
            <TopEthAndGasPriceWidget />
            <HeaderMenu />
            <main id="content" class="main-content" role="main">
                <Search />
                {children}
            </main>
            <Footer />
        </>
    );
}

export default Container;