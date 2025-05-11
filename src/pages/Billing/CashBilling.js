import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import newPatient from "../../assets/images/newPatient.svg";
import eye from "../../assets/images/eye.svg";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { listBills } from "../../redux/billing/billingSlice";
import { ReceiptPrintDownload } from "./ReceiptPrintDownload";
import ReactToPrint from "react-to-print";
import axios from "axios";
import { toast } from "sonner";

const CashBilling = () => {
  const componentRef = useRef();
  const dispatch = useDispatch();
  const { loading, bills } = useSelector((state) => state.bills);
  const currentPage = bills?.current_page || 1;
  const lastPage = bills?.last_page || 1;
  const total = bills?.total || 0;
  const [selectedBill, setSelectedBill] = useState(null);
  const [activeBill, setActiveBill] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeCard, setActiveCard] = useState("unreceipted");

  const openModal = (bill) => {
    setActiveBill(bill);
    setSelectedBill(bill);
    setShowModal(true);
  };

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

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= lastPage) {
      const token = Cookies.get("token");
      if (token) {
        dispatch(
          listBills({
            payload: { page: newPage },
            token,
          })
        );
      }
    }
  };

  const handleReceipt = (type) => {
    console.log(
      `${type === "full" ? "Full" : "Partial"} payment for:`,
      activeBill
    );
    setSelectedBill(activeBill);
    setShowModal(false);
  };

  const handleReceiptClick = (bill) => {
    setSelectedBill(bill);
  };

  const handleConfirmAndPrint = async () => {
    try {
      const token = Cookies.get("token");
      const response = await axios.post(
        "https://maimoon.hospify.co.ke/api/payments/cash/clear",
        {
          bill_id: activeBill?.id,
          amount: activeBill?.balance,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        toast.success("Payment cleared successfully!");
        setShowModal(false);
        // Refresh bills after successful payment
        dispatch(
          listBills({
            payload: { page: currentPage },
            token,
          })
        );
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to clear payment."
      );
    }
  };

  const unreceiptedCount = Array.isArray(bills?.data)
    ? bills.data.filter(
        (data) => data.status === "PENDING" && data.balance > 0
      ).length
    : 0;
  const receiptedCount = Array.isArray(bills?.data)
    ? bills.data.filter(
        (data) => data.status === "SUCCESS" && data.balance === 0
      ).length
    : 0;

  const filteredBills = Array.isArray(bills?.data)
    ? bills.data.filter((data) =>
        activeCard === "unreceipted"
          ? data.status === "PENDING" && data.balance > 0
          : data.status === "SUCCESS" && data.balance === 0
      )
    : [];

  return (
    <div className="mx-auto p-4">
      <div className="flex flex-wrap items-center gap-2 justify-between my-4">
        <h3>
          <b>Cash Billing</b>
        </h3>
        <div>
          <label htmlFor="searchpatient">
            <input
              type="search"
              className="px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1"
              placeholder="Search here..."
            />
          </label>
        </div>
      </div>

      <section className="bg-white p-4 rounded-lg mb-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div
            className={`p-4 rounded-lg flex items-center gap-4 cursor-pointer ${
              activeCard === "unreceipted"
                ? "bg-[#DD3459] text-white"
                : "bg-[#FFE2E5] text-[#DD3459]"
            }`}
            onClick={() => setActiveCard("unreceipted")}
          >
            <div
              className={`p-3 rounded-full ${
                activeCard === "unreceipted" ? "bg-white" : "bg-[#DD3459]"
              }`}
            >
              <img
                src={newPatient}
                alt="patient"
                className={activeCard === "unreceipted" ? "filter invert" : ""}
              />
            </div>
            <div>
              <h5 className="font-bold">{unreceiptedCount}</h5>
              <p>Unreceipted Cash Bills</p>
            </div>
          </div>
          <div
            className={`p-4 rounded-lg flex items-center gap-4 cursor-pointer ${
              activeCard === "receipted"
                ? "bg-[#0E6F1E] text-white"
                : "bg-[#DBFFDE] text-[#0E6F1E]"
            }`}
            onClick={() => setActiveCard("receipted")}
          >
            <div
              className={`p-3 rounded-full ${
                activeCard === "receipted" ? "bg-white" : "bg-[#0E6F1E]"
              }`}
            >
              <img
                src={newPatient}
                alt="patient"
                className={activeCard === "receipted" ? "filter invert" : ""}
              />
            </div>
            <div>
              <h5 className="font-bold">{receiptedCount}</h5>
              <p>Receipted Cash Bills</p>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-2 lg:grid-cols-6 gap-2 my-4">
        <Link
          to="/app/receiptdetails/1"
          className="bg-[#0E6F1E] text-[#DBFFDE] hover:bg-[#35a147] px-5 py-2 rounded-lg text-center"
        >
          <span>Receipt Bill</span>
        </Link>
        <Link
          to="#"
          className="bg-[#0E6F1E] text-[#DBFFDE] hover:bg-[#35a147] px-5 py-2 rounded-lg text-center"
        >
          <span>Refund Bill</span>
        </Link>
        <Link
          to="#"
          className="bg-[#0E6F1E] text-[#DBFFDE] hover:bg-[#35a147] px-5 py-2 rounded-lg text-center"
        >
          <span>Edit Bill</span>
        </Link>
        <Link
          to="#"
          className="bg-[#0E6F1E] text-[#DBFFDE] hover:bg-[#35a147] px-5 py-2 rounded-lg text-center"
        >
          <span>Split Payment</span>
        </Link>
        <Link
          to="#"
          className="bg-[#0E6F1E] text-[#DBFFDE] hover:bg-[#35a147] px-5 py-2 rounded-lg text-center"
        >
          <span>Cancel Bill</span>
        </Link>
        <Link
          to="#"
          className="bg-[#0E6F1E] text-[#DBFFDE] hover:bg-[#35a147] px-5 py-2 rounded-lg text-center"
        >
          <span>Add Discount</span>
        </Link>
      </div>

      <section className="bg-white p-4 rounded-lg">
        <div className="overflow-x-auto rounded-lg">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold">
                  No.
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold">
                  Ref. No
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold">
                  Patient Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold">
                  Bill Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold">
                  Discount
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredBills.length > 0 ? (
                filteredBills.map((data, index) => (
                  <tr key={data.id || index}>
                    <td className="px-6 py-3 text-sm">{index + 1}</td>
                    <td className="px-6 py-3 text-sm">{data.initiated_at}</td>
                    <td className="px-6 py-3 text-sm">
                      {data.bill_reference_number}
                    </td>
                    <td className="px-6 py-3 text-sm">
                      {data.patient_first_name} {data.patient_last_name}
                    </td>
                    <td className="px-6 py-3 text-sm">{data.balance}</td>
                    <td className="px-6 py-3 text-sm">{data.discount}</td>
                    <td className="px-6 py-3 text-sm">{data.status}</td>
                    <td className="py-2 px-6">
                      <div className="dropdown dropdown-end">
                        <div
                          tabIndex={0}
                          role="button"
                          className="btn btn-sm bg-[#DBFFDE]"
                        >
                          <img src={eye} alt="eye" />
                        </div>
                        <ul
                          tabIndex={0}
                          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                        >
                          <li>
                            <button onClick={() => openModal(data)}>
                              Receipt Bill
                            </button>
                          </li>
                          <li>
                            <button>Refund Bill</button>
                          </li>
                          <li>
                            <button>Edit Bill</button>
                          </li>
                          <li>
                            <button>Split Bill</button>
                          </li>
                          <li>
                            <button>Cancel Bill</button>
                          </li>
                          <li>
                            <button>Add Discount</button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="px-6 py-3 text-sm text-center">
                    {activeCard === "unreceipted"
                      ? "No pending bills with balance greater than zero."
                      : "No receipted bills with zero balance."}
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
      </section>

      {showModal && (
        <dialog id="receipt_modal" className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Receipt Payment</h3>
            <p className="py-4">
              Do you want to receipt the full amount for{" "}
              <strong>
                {activeBill?.patient_first_name} {activeBill?.patient_last_name}
              </strong>{" "}
              valued at Kshs <strong>{activeBill?.balance}</strong>/=
            </p>
            <div className="modal-action">
              <form method="dialog" className="flex gap-2">
                <div className="btn btn-success">
                  <ReactToPrint
                    trigger={() => <button>Confirm & Print</button>}
                    content={() => componentRef.current}
                    onBeforePrint={handleConfirmAndPrint}
                  />
                </div>
                <button className="btn" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </dialog>
      )}
      <div className="hidden">
        <ReceiptPrintDownload ref={componentRef} bill={selectedBill} />
      </div>
    </div>
  );
};

export default CashBilling;