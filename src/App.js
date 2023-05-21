import { BrowserRouter, Routes, Route } from "react-router-dom";

import LayoutAdmin from "./pages/LayoutAdmin";
import Dashboard from "./pages/Dashboard";
import Incomings from "./pages/incomings/Incomings";
import Spendings from "./pages/spendings/Spendings";
import Products from "./pages/products/Products";
import Customers from "./pages/customers/Customers";
import Providers from "./pages/providers/Providers";

import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="/admin/" element={<LayoutAdmin />}>
          <Route path="/admin/" element={<Dashboard />} />
          <Route path="/admin/incomings" element={<Incomings />} />
          <Route path="/admin/spendings" element={<Spendings />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/customers" element={<Customers />} />
          <Route path="/admin/providers" element={<Providers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
