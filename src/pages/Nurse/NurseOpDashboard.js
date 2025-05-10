import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import newPatient from "../../assets/images/newPatient.svg";
import { MdRemoveRedEye, MdEdit } from "react-icons/md";
import { getUniversalStage } from "../../redux/universal Slice/UniversalStageSlice";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";

const NurseOpDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { universalStage, isLoading } = useSelector(
    (state) => state.universalStage
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  const [id, setId] = useState(0);
  const [waitingReviewsData, setWaitingReview] = useState([]);

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      dispatch(getUniversalStage({ page: currentPage, token, stage: "Triage" }));
    }
  }, [dispatch, currentPage]);
  

  // useEffect(() => {
  //   dispatch(getUniversalStage(currentPage));
  // }, [dispatch, currentPage]);
  

  useEffect(() => {
    if (universalStage?.data?.length > 0) {
      setWaitingReview(universalStage.data);
      setLastPage(universalStage.last_page || 1);
    }
  }, [universalStage]);

  const goToPage = (page) => {
    if (page >= 1 && page <= lastPage) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="mx-auto p-4">
      <section className="bg-white p-4 rounded-lg">
        <div className="flex flex-wrap items-center gap-2 justify-between my-4">
          <div>
            <h3>
              <b>Welcome, Nambi</b>
            </h3>
            <div className="flex gap-2">
              <Link
                to="/app/"
                className="bg-[#E7F1E9] text-[#0E6F1E] px-5 py-2 rounded-lg font-semibold"
              >
                Add Service
              </Link>
              <Link
                to="/app/"
                className="bg-[#E7F1E9] text-[#0E6F1E] px-5 py-2 rounded-lg font-semibold"
              >
                Report Incident
              </Link>
            </div>
          </div>
          <div>
            <label htmlFor="searchpatient">
              <input
                type="search"
                className="px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1"
                placeholder="Search for patient..."
              />
            </label>
          </div>
        </div>

        <div className="grid grid-cols-8 gap-4">
          <div className="space-y-4 col-span-2">
            <div className="bg-[#F3E8FF] p-4 rounded-lg flex items-center gap-4">
              <div className="bg-[#8D49D4] p-3 rounded-full">
                <img src={newPatient} alt="patient" />
              </div>
              <Link to="/app/triage" className="cursor-pointer">
                <h5 className="font-bold text-[#8D49D4]">34</h5>
                <p>Triage</p>
              </Link>
            </div>
            <div className="bg-[#DEF3FF] p-4 rounded-lg flex items-center gap-4">
              <div className="bg-[#2E8BBF] p-3 rounded-full">
                <img src={newPatient} alt="patient" />
              </div>
              <Link to="/app/triage" className="cursor-pointer">
                <h5 className="font-bold text-[#2E8BBF]">24</h5>
                <p>Procedures</p>
              </Link>
            </div>
            <div className="bg-[#FFE2E5] p-4 rounded-lg flex items-center gap-4">
              <div className="bg-[#DD3459] p-3 rounded-full">
                <img src={newPatient} alt="patient" />
              </div>
              <Link to="/app/wardtransfer" className="cursor-pointer">
                <h5 className="font-bold text-[#DD3459]">16</h5>
                <p>Ward Transfer</p>
              </Link>
            </div>
            <div className="bg-[#E7F1E9] p-4 rounded-lg flex items-center gap-4">
              <div className="bg-[#0E6F1E] p-3 rounded-full">
                <img src={newPatient} alt="patient" />
              </div>
              <Link to="/app/triage" className="cursor-pointer">
                <h5 className="font-bold text-[#0E6F1E]">16</h5>
                <p>Casualty</p>
              </Link>
            </div>
          </div>

          <div className="col-span-6 overflow-x-auto rounded-lg">
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold">
                    Date.
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">
                    Visit Code
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">
                    Patient Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">
                    Age
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">
                    Gender
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">
                    Scheme
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">
                    Wait time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {!isLoading &&
                  waitingReviewsData
                    .filter((data) => data.visits.length > 0)
                    .map((data, index) => (
                      <tr key={index}>
                        <td className="px-6 py-3 text-sm">
                          {data.visits[0]?.created_at ?? "N/A"}
                        </td>
                        <td className="px-6 py-3 text-sm">
                          {data.visits[0]?.id ?? "N/A"}
                        </td>
                        <td className="px-6 py-3 text-sm">
                          {data.patient_firstname}
                        </td>
                        <td className="px-6 py-3 text-sm">
                          {calculateAge(data.dob)}
                        </td>
                        <td className="px-6 py-3 text-sm">{data.gender}</td>
                        <td className="px-6 py-3 text-sm">
                          {data.insurance_details?.[0]?.schemes?.[0]?.name ??
                            "N/A"}
                        </td>
                        <td className="px-6 py-3 text-sm">{data.created_by}</td>
                        <td className="py-2 px-6 flex space-x-2">
                          <Link
                            to="/app/triage"
                            state={{ id: data.id }}
                            className="text-[#0E6F1E] bg-[#DBFFDE] p-2 rounded-lg text-xl"
                          >
                            <MdRemoveRedEye />
                          </Link>
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>

            <div className="mt-4 flex justify-center items-center space-x-2">
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Prev
              </button>
              {[...Array(lastPage).keys()].map((num) => {
                const page = num + 1;
                return (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`px-3 py-1 border rounded ${
                      currentPage === page
                        ? "bg-green-600 text-white"
                        : "bg-white"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === lastPage}
                className="px-3 py-1 border rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        <section className="my-4 shadow-lg p-4">
          <h4>OP Nurse Orders</h4>
          <div className="col-span-6 overflow-x-auto rounded-lg mt-4">
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
                    Patient Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">
                    Age
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">
                    Gender
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">
                    Instructing Doctor
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">
                    Instruction Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">
                    Waiting Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">
                    Instructions
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {waitingReviewsData.map((data, index) => (
                  <tr key={index}>
                    <td className="px-6 py-3 text-sm">{data.No}</td>
                    <td className="px-6 py-3 text-sm">{data.date}</td>
                    <td className="px-6 py-3 text-sm">{data.patientName}</td>
                    <td className="px-6 py-3 text-sm">{data.insurance}</td>
                    <td className="px-6 py-3 text-sm">{data.scheme}</td>
                    <td className="px-6 py-3 text-sm">{data.createdBy}</td>
                    <td className="px-6 py-3 text-sm">{data.createdBy}</td>
                    <td className="px-6 py-3 text-sm">{data.createdBy}</td>
                    <td className="px-6 py-3 text-sm">{data.createdBy}</td>
                    <td className="py-2 px-6 flex space-x-2">
                      <Link
                        to={`/app/update/${data.No}`}
                        className="text-[#3E36B0] bg-[#E4EDFE] p-2 rounded-lg text-xl"
                      >
                        <MdEdit />
                      </Link>
                      <Link
                        to={`/app/view/${data.No}`}
                        className="text-[#0E6F1E] bg-[#DBFFDE] p-2 rounded-lg text-xl"
                      >
                        <MdRemoveRedEye />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </div>
  );
};

export default NurseOpDashboard;
