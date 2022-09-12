
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProtectedRoute from "./pages/ProtectedRoute";
import ProtectedRouteAdmin from "./pages/ProtectedRouteAdmin";
import Basket from "./pages/Basket";
import Error404 from "./pages/Error404";
import Admin from "./pages/Admin";
import AdminOrders from "./pages/AdminOrders";
import AdminProducts from "./pages/AdminProducts";


function App() {
  return (
    <div>
      <Navbar />
      <div id="content">
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:product_id" element={<ProductDetail />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="*" element={<Error404 />} />
          <Route element={<ProtectedRoute />} >
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route element={<ProtectedRouteAdmin admin={true} />}>
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/adminorders" element={<AdminOrders />} />
            <Route path="/admin/adminproducts" element={<AdminProducts />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
