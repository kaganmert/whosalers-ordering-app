import { useState } from "react";
import { pastOrdersApi } from "../queries/pastOrders.generated";
import { userApi } from "../queries/user.generated";
import Header from "../components/layouts/Header";
import Sidebar from "../components/layouts/Sidebar";
import WelcomeBanner from "../components/layouts/WelcomeBanner";

import { UserQuery } from "../queries/user.generated";
import Account from "../components/layouts/Account";

function Dashboard() {
  // const { data, error, isFetching, isLoading } =
  //   pastOrdersApi.usePastOrdersQuery();

  const { data, error, isFetching, isLoading } = userApi.useUserQuery();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  console.log(data);
  console.log(sidebarOpen);
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <WelcomeBanner />
          <Account />

          <div className="mt-6 ml-12"></div>
          <div className="w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl"></div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
