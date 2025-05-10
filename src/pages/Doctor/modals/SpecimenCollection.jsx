import React, { useRef, useEffect } from 'react';

const SpecimenCollection = ({ show, handleClose }) => {
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
    <dialog ref={modalRef} className="modal" id="specimen_modal">
      <div className="modal-box w-11/12 max-w-5xl">
        <h3 className="text-lg font-semibold text-[#100C53] text-center mb-4">Add New Appointments</h3>

        <form method="dialog" className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <input
              name="date"
              type="date"
              placeholder="Date"
              className="input input-bordered w-full"
            />
            <input
              name="time"
              placeholder="Time"
              className="input input-bordered w-full"
            />
          </div>

          <input
            name="clinic"
            placeholder="Clinic"
            className="input input-bordered w-full"
          />

          <select
            name="doctor"
            className="select select-bordered w-full"
          >
            <option value="">Doctor in Charge</option>
            <option value="doctor1">Doctor 1</option>
            <option value="doctor2">Doctor 2</option>
            <option value="doctor3">Doctor 3</option>
          </select>

          <textarea
            name="appointmentReason"
            rows="5"
            placeholder="Reason for appointment"
            className="textarea textarea-bordered w-full"
          />

          <div className="flex justify-center pt-4">
            <button type="submit" className="btn bg-customGreen text-white hover:bg-green-700">
              Add
            </button>
          </div>
        </form>

        <div className="modal-action">
          <button className="btn" onClick={closeModal}>Close</button>
        </div>
      </div>
    </dialog>
  );
};

export default SpecimenCollection;
