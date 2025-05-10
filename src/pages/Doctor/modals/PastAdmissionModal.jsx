import React, { useRef, useEffect } from 'react';

const PastAdmissionModal = ({ show, handleClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (show) {
      modalRef.current?.showModal();
    }
  }, [show]);

  const closeModal = () => {
    modalRef.current?.close();
    handleClose();
  };

  return (
    <dialog ref={modalRef} className="modal">
      <div className="modal-box w-11/12 max-w-2xl">
        <div className="flex justify-center mb-4">
          <h3 className="text-lg font-semibold text-[#100C53]">Past Admissions</h3>
        </div>

        <form method="dialog">
          <div className="mb-2">
            <input
              type="date"
              name="visitDate"
              placeholder="Visit Date"
              className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none"
            />
          </div>

          <div className="mb-2">
            <select
              name="disease"
              className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none"
            >
              <option value="">Disease</option>
              <option value="disease1">disease 1</option>
              <option value="disease2">disease 2</option>
              <option value="disease3">disease 3</option>
            </select>
          </div>

          <div className="mb-2">
            <input
              name="admittingHospital"
              placeholder="Admitting Hospital"
              className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none"
            />
          </div>

          <div className="mb-2">
            <input
              name="DoctorIncharge"
              placeholder="Doctor Incharge"
              className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none"
            />
          </div>

          <div className="flex justify-center my-4">
            <button type="submit" className="px-4 py-2 rounded-lg bg-customGreen text-white">
              Add
            </button>
          </div>
        </form>

        <div className="modal-action">
          <button className="btn" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default PastAdmissionModal;
