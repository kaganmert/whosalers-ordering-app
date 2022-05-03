import { pastOrdersApi } from "../queries/pastOrders.generated";
import { LoadingScreen } from "../styles/GlobalStyles";
import { useTable } from "react-table";
import React from "react";

import { useState } from "react";
import Header from "../components/layouts/Header";
import Sidebar from "../components/layouts/Sidebar";
import WelcomeBanner from "../components/layouts/WelcomeBanner";

function Orders() {
  const { data, error, isLoading } = pastOrdersApi.usePastOrdersQuery();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const columns = React.useMemo(
    () => [
      {
        Header: "Order Info",
        columns: [
          {
            Header: "Order Date",
            accessor: `orderDate`,
          },
          {
            Header: "Preparation Time",
            accessor: "preparationTime",
          },
          {
            Header: "Delivery Fee",
            accessor: "deliveryFee",
          },
          {
            Header: "Delivery Time",
            accessor: "deliveryTime",
          },

          {
            Header: "Delivery Type",
            accessor: "deliveryType",
          },

          {
            Header: "Earned Point",
            accessor: "earnedPoints",
          },

          {
            Header: "total",
            accessor: "total",
          },
          {
            Header: "status",
            accessor: "status",
          },
        ],
      },
    ],
    []
  );
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
                  <h1 className="text-xl font-semibold">Orders Table</h1>
                </div>
                <div className="mt-4">
                  <Table columns={columns} data={data?.pastOrders} />
                </div>
              </main>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Orders;

function Table({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });
  return (
    <div className="flex flex-col mt-2">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
            {" "}
            <table className="table border border-black" {...getTableProps()}>
              <thead className="border border-black">
                {headerGroups.map((headerGroup) => (
                  <tr
                    className="border border-black"
                    {...headerGroup.getHeaderGroupProps()}
                  >
                    {headerGroup.headers.map((column) => (
                      <th
                        className="p-2 border border-black"
                        {...column.getHeaderProps()}
                      >
                        <label className="text-red-800">
                          {" "}
                          {column.render("Header")}
                        </label>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className="border border-black" {...getTableBodyProps()}>
                {rows.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr className="border border-black" {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td
                            className="p-2 border border-black"
                            {...cell.getCellProps()}
                          >
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
