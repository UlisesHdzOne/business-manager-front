import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-blue-200 flex flex-col">
      <Navbar />
      <main className="flex-1 py-4 mx-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
