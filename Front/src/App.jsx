import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {BrowserRouter, Navigate, Redirect, Route, Routes} from "react-router-dom";

const App = () => {
  const user = true;
  return (
      <BrowserRouter>
  <Routes>
    <Route path="/" element={
      <Home/>
    }/>
    <Route path="/login" element={
      user ? <Navigate to="/"/>
          : <Login/>
    }/>
    <Route path="/register" element={
      user ? <Navigate to="/"/>
          : <Register/>
    }/>
    <Route path="/products/:category" element={
      <ProductList/>
    }/>
    <Route path="/cart" element={
      <Cart/>
    }/>
  </Routes>
</BrowserRouter>
  )
};

export default App;