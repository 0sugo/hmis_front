import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import newPatient from "../../assets/images/newPatient.svg";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { listBills } from "../../redux/billing/billingSlice";

const BillingDasboard = () => {
  const dispatch = useDispatch();
  const [summaryCounts, setSummaryCounts] = useState({
    finalized: 0,
    unfinalized: 0,
    receiptedCash: 0,
    unreceiptedCash: 0,
  });

  const { loading, bills, currentPage, lastPage, total, error, success } =
    useSelector((state) => state.bills);

  const [list, setList] = useState([]);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      dispatch(
        listBills({
          payload: { page: currentPage },
          token,
        })
      );
    }
  }, [dispatch, currentPage]);

  useEffect(() => {
    if (bills?.data && Array.isArray(bills.data)) {
      setList(bills.data);

      const finalized = bills.data.filter(
        (item) => item.status === "SUCCESS"
      ).length;
      const unfinalized = bills.data.filter(
        (item) => item.status === "PENDING"
      ).length;

      // Assuming these are based on bill type and receipting status (update logic as needed)
      const receiptedCash = bills.data.filter(
        (item) => item.receipted === true
      ).length;
      const unreceiptedCash = bills.data.filter(
        (item) => item.receipted === false
      ).length;

      setSummaryCounts({
        finalized,
        unfinalized,
        receiptedCash,
        unreceiptedCash,
      });
    }
  }, [bills]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= lastPage) {
      dispatch({
        type: "bills/setCurrentPage",
        payload: newPage,
      });
    }
  };

  const [filters, setFilters] = useState({
    status: "", // "SUCCESS", "PENDING", etc.
    insurance: "", // insurance name or ID
    search: "", // string to match invoice or patient ID
  });

  const filteredList = list.filter((item) => {
    const matchStatus = filters.status ? item.status === filters.status : true;
    const matchInsurance = filters.insurance
      ? (item.insurance || "")
          .toLowerCase()
          .includes(filters.insurance.toLowerCase())
      : true;
    const matchSearch = filters.search
      ? item.bill_reference_number?.includes(filters.search) ||
        item.visit?.patient_id?.toString().includes(filters.search)
      : true;

    return matchStatus && matchInsurance && matchSearch;
  });

  return (
    <div className="mx-auto p-4">
      <section className="bg-white p-4 rounded-lg my-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-[#F3E8FF] p-4 rounded-lg flex items-center gap-4">
            <div className="bg-[#8D49D4] p-3 rounded-full">
              <img src={newPatient} alt="patient" />
            </div>
            <div>
              <h5 className="font-bold text-[#8D49D4]">
                {summaryCounts.unfinalized}
              </h5>
              <p>Unfinalized Invoices</p>
            </div>
          </div>
          <div className="bg-[#DEF3FF] p-4 rounded-lg flex items-center gap-4">
            <div className="bg-[#2E8BBF] p-3 rounded-full">
              <img src={newPatient} alt="patient" />
            </div>
            <div>
              <h5 className="font-bold text-[#2E8BBF]">
                {summaryCounts.finalized}
              </h5>
              <p>Finalized Invoice</p>
            </div>
          </div>
          <div className="bg-[#FFE2E5] p-4 rounded-lg flex items-center gap-4">
            <div className="bg-[#DD3459] p-3 rounded-full">
              <img src={newPatient} alt="patient" />
            </div>
            <div>
              <h5 className="font-bold text-[#DD3459]">16</h5>
              <p>Unreceipted Cash Bills</p>
            </div>
          </div>
          <div className="bg-[#E7F1E9] p-4 rounded-lg flex items-center gap-4">
            <div className="bg-[#0E6F1E] p-3 rounded-full">
              <img src={newPatient} alt="patient" />
            </div>
            <div>
              <h5 className="font-bold text-[#0E6F1E]">16</h5>
              <p>Receipted Cash Bills</p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-between">
        <h3 className="text-xl text-center font-semibold text-[#192252]">
          Bill Listing
        </h3>
        <Link to="#" className="text-[#0E6F1E] font-semibold">
          See all
        </Link>
      </div>

      <section className="bg-white p-4 my-4 rounded-lg">
        {loading ? (
          <div className="flex justify-center items-center py-10">
            <p>Loading...</p>
          </div>
        ) : error ? (
          <div className="text-red-500 text-center py-10">{error}</div>
        ) : (
          <div className="overflow-x-auto rounded-lg">
            <div className="flex flex-wrap gap-4 mb-4 items-center ">
              <div>
                <label className="block text-sm font-medium mb-1">Status</label>
                <select
                  value={filters.status}
                  onChange={(e) =>
                    setFilters((prev) => ({ ...prev, status: e.target.value }))
                  }
                  className="border rounded px-3 py-1"
                >
                  <option value="">All</option>
                  <option value="SUCCESS">Finalized</option>
                  <option value="PENDING">Unfinalized</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Insurance
                </label>
                <input
                  type="text"
                  value={filters.insurance}
                  onChange={(e) =>
                    setFilters((prev) => ({
                      ...prev,
                      insurance: e.target.value,
                    }))
                  }
                  placeholder="Insurance name"
                  className="border rounded px-3 py-1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Search</label>
                <input
                  type="text"
                  value={filters.search}
                  onChange={(e) =>
                    setFilters((prev) => ({ ...prev, search: e.target.value }))
                  }
                  placeholder="Patient ID or Invoice No"
                  className="border rounded px-3 py-1"
                />
              </div>
            </div>

            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold">
                    ID.
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">
                    Visit Code
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">
                    Invoice No
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">
                    Patient Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">
                    Insurance
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">
                    Scheme
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">
                    Invoice Amt.
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredList.length > 0 ? (
                  filteredList.map((data, index) => (
                    <tr key={index}>
                      <td className="px-6 py-3 text-sm">{data.id}</td>
                      <td className="px-6 py-3 text-sm">{data.initiated_at}</td>
                      <td className="px-6 py-3 text-sm">{data.visit?.id}</td>
                      <td className="px-6 py-3 text-sm">
                        {data.bill_reference_number}
                      </td>
                      <td className="px-6 py-3 text-sm">
                        {data.visit?.patient_id}
                      </td>
                      <td className="px-6 py-3 text-sm">
                        {data.insurance ?? "N/A"}
                      </td>
                      <td className="px-6 py-3 text-sm">
                        {data.scheme ?? "N/A"}
                      </td>
                      <td className="px-6 py-3 text-sm">
                        {data.bill_amount?.toFixed(2)}
                      </td>
                      <td
                        className={`px-6 py-3 text-sm ${
                          data.status === "SUCCESS"
                            ? "text-green-600"
                            : data.status === "PENDING"
                            ? "text-red-600"
                            : ""
                        }`}
                      >
                        {data.status}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="9"
                      className="px-6 py-10 text-center text-gray-500"
                    >
                      No bills match the filters
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            {total > 0 && (
              <div className="flex justify-center items-center gap-2 mt-6">
                <button
                  onClick={() => handlePageChange(1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50"
                >
                  First
                </button>

                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50"
                >
                  Prev
                </button>

                <span className="px-4 py-1 text-sm font-medium text-gray-700">
                  Page {currentPage} of {lastPage}
                </span>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === lastPage}
                  className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50"
                >
                  Next
                </button>

                <button
                  onClick={() => handlePageChange(lastPage)}
                  disabled={currentPage === lastPage}
                  className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50"
                >
                  Last
                </button>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default BillingDasboard;
