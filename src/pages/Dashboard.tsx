import { pastOrdersApi } from "../queries/pastOrders.generated";
import { userApi } from "../queries/user.generated";

function Dashboard() {
  // const { data, error, isFetching, isLoading } =
  //   pastOrdersApi.usePastOrdersQuery();

  const { data, error, isFetching, isLoading } = userApi.useUserQuery();

  console.log(data, isFetching, isLoading, error);
  return <h2>Dashboard Page</h2>;
}

export default Dashboard;
