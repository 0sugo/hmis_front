import React, { useRef, useEffect } from 'react';

const AppointmentsModal = ({ show, handleClose }) => {
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
          <h3 className="text-lg font-semibold text-[#100C53]">Add new appointments</h3>
        </div>

        <form method="dialog">
          <div className="mb-2 grid grid-cols-1 md:grid-cols-2 gap-2">
            <input
              name="date"
              type="date"
              placeholder="Date"
              className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none"
            />
            <input
              name="time"
              placeholder="Time"
              className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none"
            />
          </div>

          <div className="mb-2">
            <input
              name="clinic"
              placeholder="Clinic"
              className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none"
            />
          </div>

          <div className="mb-2">
            <select
              name="doctor"
              className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none"
            >
              <option value="">Doctor in Charge</option>
              <option value="doctor1">Doctor 1</option>
              <option value="doctor2">Doctor 2</option>
              <option value="doctor3">Doctor 3</option>
            </select>
          </div>

          <div className="mb-2">
            <textarea
              rows="5"
              name="appointmentReason"
              placeholder="Reason of appointment"
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

export default AppointmentsModal;
