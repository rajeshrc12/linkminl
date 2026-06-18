import Navbar from "@/routes/dashboard/navbar";
import Sidebar from "@/routes/dashboard/sidebar";
import { Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />
        <div className="bg-gray-100 h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
