import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./scenes/home/Home";
import ItemDetail from "./scenes/itemDetails/ItemDetail";
import Checkout from "./scenes/checkout/Checkout";
import Confirmation from "./scenes/checkout/Confirmation";
import NavBar from "./scenes/global/NavBar";
import CartMenue from "./scenes/global/CartMenue";
import Footer from "./scenes/global/Footer";
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    console.log(pathname);
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <ScrollToTop></ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="item/:itemId" element={<ItemDetail />} />
          <Route path="checkout" element={<Checkout />}></Route>
          <Route path="checkout/succuess" element={<Confirmation />}></Route>
        </Routes>
        <CartMenue></CartMenue>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
