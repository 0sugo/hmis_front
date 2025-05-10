import React, { useRef, useEffect } from 'react';

const NurseInstruction = ({ show, handleClose }) => {
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
          <h3 className="text-lg font-semibold text-[#100C53]">Add Instruction</h3>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-2">
          <p className="text-[#100C53]">
            Patient Name: <span className="text-[#616161]">Idriis Maimoon</span>
          </p>
          <p className="text-[#100C53]">
            Visit Code: <span className="text-[#616161]">MH-0001</span>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <p className="text-[#100C53]">
            Age: <span className="text-[#616161]">23 Years</span>
          </p>
          <p className="text-[#100C53]">
            Gender: <span className="text-[#616161]">Male</span>
          </p>
        </div>

        <form method="dialog">
          <label className="text-[#192252] text-xs font-semibold mb-1 block">Add Instruction</label>
          <div className="mb-4">
            <textarea
              rows="5"
              name="instruction"
              placeholder="Write here ..."
              className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none"
            />
          </div>

          <div className="flex justify-center my-4">
            <button type="submit" className="px-4 py-2 rounded-lg bg-customGreen text-white">
              Add Instruction
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

export default NurseInstruction;
