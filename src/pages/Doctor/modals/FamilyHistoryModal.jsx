import React from 'react'
import Modal from 'react-bootstrap/Modal';

const FamilyHistoryModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <div className='flex justify-center w-full'>
          <Modal.Title>
            <span className='text-[#100C53] font-semibold '>Family History</span>
          </Modal.Title>
        </div>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="mb-2">
            <input name="familyMember" placeholder='Family Member' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none " />
          </div>
          <div className="mb-2">
            <select name="disease" placeholder='Disease' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none " >
              <option value="">Disease</option>
              <option value="disease1">disease 1</option>
              <option value="disease2">disease 2</option>
              <option value="disease3">disease 3</option>
            </select>
          </div>
          <div className="mb-2">
            <textarea rows="5" name="deathCause" placeholder='Cause of Death(if applicable)' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none " />
          </div>

          <div className='flex justify-center my-4'>
            <button type="submit" className='px-4 py-2 rounded-lg bg-customGreen text-white'>Add</button>
          </div>

        </form>
      </Modal.Body>
    </Modal>
  )
}

export default FamilyHistoryModal
