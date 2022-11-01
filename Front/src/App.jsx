import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

const App = () => {
  return (
      <BrowserRouter>
  <Routes>
    <Route path="/" element={
      <Home/>
    }/>
    <Route path="/login" element={
      <Login/>
    }/>
    <Route path="/register" element={
      <Register/>
    }/>
    <Route path="/productlist" element={
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