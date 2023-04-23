import IndexHeader from "@/components/NavBar/Navbar";
import IndexProduct from "@/components/product/IndexProduct";

import CartDetailsProvider from "@/context/useCartDetails";

const App = () => {
    return (
        <CartDetailsProvider>
            <IndexHeader />
            <IndexProduct />
        </CartDetailsProvider>
    );
};

export default App;
