import React, { useRef, useEffect } from 'react';

const SubstanceAbuseHistory = ({ show, handleClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (show) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [show]);

  const closeModal = () => {
    modalRef.current?.close();
    handleClose();
  };

  return (
    <dialog ref={modalRef} id="substance_abuse_modal" className="modal">
      <div className="modal-box w-11/12 max-w-2xl">
        <h3 className="text-lg font-semibold text-[#100C53] text-center mb-4">
          Substance Abuse History
        </h3>

        <form method="dialog" className="space-y-3">
          <input
            type="date"
            name="visitDate"
            placeholder="Visit Date"
            className="input input-bordered w-full"
          />

          <select
            name="disease"
            className="select select-bordered w-full"
          >
            <option value="">Disease</option>
            <option value="disease1">Disease 1</option>
            <option value="disease2">Disease 2</option>
            <option value="disease3">Disease 3</option>
          </select>

          <input
            name="patientName"
            placeholder="Patient Name"
            className="input input-bordered w-full"
          />

          <input
            name="DoctorIncharge"
            placeholder="Doctor Incharge"
            className="input input-bordered w-full"
          />

          <div className="flex justify-center pt-4">
            <button type="submit" className="btn bg-customGreen text-white hover:bg-green-700">
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

export default SubstanceAbuseHistory;
