import { Navbar } from "./Components/Navbar.jsx";
import { SignIn } from "./Components/SignIn.jsx";
import { SignUp } from "./Components/SignUp.jsx";
import { Products } from "./Components/Products.jsx";
import { Error } from "./Components/Error.jsx";
import { Routes, Route } from "react-router-dom";
import { Cart } from "./Components/Cart.jsx";
import { Checkout } from "./Components/Checkout.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/auth" element={<Navbar />}>
          <Route path="login" element={<SignIn />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
        </Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
