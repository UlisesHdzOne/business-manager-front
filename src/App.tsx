import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import CustomersPage from "./pages/CustomersPage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/customers" element={<CustomersPage />} />
      </Route>
    </Routes>
  );
}

export default App;
