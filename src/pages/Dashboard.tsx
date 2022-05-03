import { useState } from "react";
import Header from "../components/layouts/Header";
import Sidebar from "../components/layouts/Sidebar";
import WelcomeBanner from "../components/layouts/WelcomeBanner";
import Account from "../components/layouts/Account";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <WelcomeBanner />
          <Account />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
