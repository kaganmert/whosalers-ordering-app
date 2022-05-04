import { restaurantsApi } from "../queries/restaurants.generated";
import { LoadingScreen } from "../styles/GlobalStyles";

import { useState } from "react";
import Header from "../components/layouts/Header";
import Sidebar from "../components/layouts/Sidebar";
import WelcomeBanner from "../components/layouts/WelcomeBanner";

function Restaurants() {
  const { data, error, isLoading } = restaurantsApi.useRestaurantsQuery();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <WelcomeBanner />
          <div className="App" style={{ height: "100%" }}>
            <div className="min-h-screen text-gray-900 bg-gray-100">
              <main className="max-w-4xl px-4 pt-4 mx-auto sm:px-6 lg:px-8">
                <div className="">
                  <h1 className="text-xl font-semibold">Restaurants</h1>
                </div>
                <div className="mt-4">
                  {data?.restaurants?.map((i) => (
                    <li key={i?.uid}>{i?.name}</li>
                  ))}
                </div>
              </main>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Restaurants;
