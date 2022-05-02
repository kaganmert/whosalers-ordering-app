import { pastOrdersApi } from "../queries/pastOrders.generated";

function Dashboard() {
  const { data, error, isFetching, isLoading } =
    pastOrdersApi.usePastOrdersQuery();

  console.log(data, isFetching, isLoading, error);
  return <h2>Dashboard Page</h2>;
}

export default Dashboard;
