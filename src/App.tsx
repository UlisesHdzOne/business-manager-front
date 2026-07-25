import { Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import MainLayout from "./layouts/MainLayout";
import CustomersPage from "./page/CustomersPage";

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
