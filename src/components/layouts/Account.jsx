import { userApi } from "../../queries/user.generated";
import { LoadingScreen } from "../../styles/GlobalStyles";

function Account() {
  const { data, error, isLoading } = userApi.useUserQuery();
  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <div className="grow">
      <div className="p-6 space-y-6">
        <h2 className="mb-5 text-2xl font-bold text-slate-800">My Account</h2>
        <section>
          <h2 className="mb-1 text-xl font-bold leading-snug text-slate-800">
            {data.user.firstName} {data.user.lastName}
          </h2>
          <div className="text-sm">Created At: {data.user.createdAt}</div>
          <div className="mt-5 space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-4">
            <div className="sm:w-1/3">
              <label className="block mb-1 text-sm font-medium" htmlFor="name">
                Email address
              </label>
              <p className="w-full"> {data.user.email}</p>
            </div>
            <div className="sm:w-1/3">
              <label
                className="block mb-1 text-sm font-medium"
                htmlFor="business-id"
              >
                Mobile Number
              </label>
              <p className="w-full">{data.user.mobileNumber}</p>
            </div>
            <div className="sm:w-1/3">
              <label className="block mb-1 text-sm font-medium">Points</label>
              <p className="w-full"> {data.user.points}</p>{" "}
            </div>
          </div>
          <div className="mt-5 space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-4">
            <div className="sm:w-1/3">
              <label className="block mb-1 text-sm font-medium" htmlFor="name">
                Address
              </label>
              <p className="w-full">
                {" "}
                {data.user.addresses[0].addressLine1}{" "}
                {data.user.addresses[0].adminWard}
              </p>
            </div>
            <div className="sm:w-1/3">
              <label
                className="block mb-1 text-sm font-medium"
                htmlFor="business-id"
              >
                Postal Code
              </label>
              <p className="w-full">{data.user.addresses[0].postalCode}</p>
            </div>
            <div className="sm:w-1/3">
              <label className="block mb-1 text-sm font-medium">
                Full Name
              </label>
              <p className="w-full">{data.user.addresses[0].fullName}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Account;
