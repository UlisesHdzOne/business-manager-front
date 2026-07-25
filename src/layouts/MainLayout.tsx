import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-blue-200 flex flex-col">
      <main className="flex-1 py-4 mx-4">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
