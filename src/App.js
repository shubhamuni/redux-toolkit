import { useSelector } from "react-redux";

import Cart from "./component/Cart/Cart";
import Layout from "./component/Layout/Layout";
import Products from "./component/Shop/Products";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
