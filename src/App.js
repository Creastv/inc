import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutAdmin from "./pages/LayoutAdmin";
import Dashboard from "./pages/dashboard/Dashboard";
import Incomings from "./pages/incomings/Incomings";
import Spendings from "./pages/spendings/Spendings";
import Contacts from "./pages/contacts/Contacts";
import Layout from "./pages/Layout";
import Login from "./pages/sing/Login";
import Registration from "./pages/sing/Registration";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/sing/in" element={<Login />} />
          <Route path="/sing/up" element={<Registration />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="/" element={<LayoutAdmin />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/incomings" element={<Incomings />} />
          <Route path="/spendings" element={<Spendings />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
