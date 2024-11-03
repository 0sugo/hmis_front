import React from 'react'
import Modal from 'react-bootstrap/Modal';

const SpecimenCollection = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <div className='flex justify-center w-full'>
          <Modal.Title>
            <span className='text-[#100C53] font-semibold '>Add new appointments</span>
          </Modal.Title>
        </div>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="mb-2 grid grid-cols-2 gap-2">
            <input name="date" type='date' placeholder='Date' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none " />
            <input name="time" placeholder='Time' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none " />
          </div>

          <div className="mb-2">
            <input name="clinic" placeholder='Clinic' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none " />
          </div>


          <div className="mb-2">
            <select name="disease" placeholder='Disease' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none " >
              <option value="">Doctor in Charge</option>
              <option value="disease1">doctor 1</option>
              <option value="disease2">doctor 2</option>
              <option value="disease3">doctor 3</option>
            </select>
          </div>


          <div className="mb-2">
            <textarea rows="5" name="appointmentReason" placeholder='Reason of appointment' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none " />
          </div>

          <div className='flex justify-center my-4'>
            <button type="submit" className='px-4 py-2 rounded-lg bg-customGreen text-white'>Add</button>
          </div>

        </form>
      </Modal.Body>
    </Modal>
  )
}

export default SpecimenCollection
