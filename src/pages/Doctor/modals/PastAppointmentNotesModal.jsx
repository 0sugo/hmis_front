import React, { useRef, useEffect } from 'react';

const PastAppointmentNotesModal = ({ show, handleClose, timelineData }) => {
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
    <dialog ref={modalRef} id="past_appointments_modal" className="modal">
      <div className="modal-box w-11/12 max-w-5xl p-0">
        <div className="lg:col-span-8 bg-white rounded-xl overflow-y-auto scrollbar-w-1 scrollbar scrollbar-thumb-[#413D80] scrollbar-track-slate-300 max-h-[calc(100vh-93px)]">
          <h3 className="text-[#192252] font-medium p-4 text-base sticky top-0 bg-white z-10">
            Past Appointment Notes
          </h3>

          <div className="space-y-4 p-4">
            {timelineData?.map((item, index) => (
              <div
                key={index}
                className="relative pl-6 pb-4 border-l-2 border-slate-300"
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-customGreen rounded-full -translate-x-1/2"></div>

                <div className="mb-1">
                  <div className="text-sm font-medium text-[#000000]">
                    {item.date}
                  </div>
                </div>

                <div className="bg-[#FAFAFA] p-4 rounded">
                  <div className="text-sm font-medium text-[#192252]">
                    {item.title}
                  </div>

                  <div className="text-customGrey text-xs font-medium">
                    {item.description}
                  </div>

                  <hr className="my-4" />

                  <div className="md:flex md:justify-between md:items-center text-xs">
                    <p className="flex flex-col font-medium text-[#697696]">
                      Treatment:
                      <span className="text-[#192252]">{item.Treatment}</span>
                    </p>

                    <p className="flex flex-col font-medium text-[#697696]">
                      Duration:
                      <span className="text-[#192252]">{item.Duration} months</span>
                    </p>

                    <p className="flex flex-col font-medium text-[#697696]">
                      Prescription:
                      <span className="text-[#1B91FF]">{item.prescription}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="modal-action px-6 pb-4 pt-2">
          <button className="btn" onClick={closeModal}>Close</button>
        </div>
      </div>
    </dialog>
  );
};

export default PastAppointmentNotesModal;
