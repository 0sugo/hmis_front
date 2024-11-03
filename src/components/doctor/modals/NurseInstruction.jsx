import React from 'react'
import Modal from 'react-bootstrap/Modal';

const NurseInstruction = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <div className='flex justify-center w-full'>
          <Modal.Title>
            <span className='text-[#100C53] font-semibold '>Add Instruction</span>
          </Modal.Title>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className='grid grid-cols-2 gap-4'>
          <p className='text-[#100C53]'>Patient Name : <span className='text-[#616161]'>Idriis Maimoon</span></p>
          <p className='text-[#100C53]'>Visit Code : <span className='text-[#616161]'>MH-0001</span></p>
        </div>

        <div className='grid grid-cols-2 gap-4'>
          <p className='text-[#100C53]'>Age : <span className='text-[#616161]'>23 Years</span></p>
          <p className='text-[#100C53]'>Gender : <span className='text-[#616161]'>Male</span></p>
        </div>
        <form>
          <label className='text-[#192252] text-xs font-semibold'>Add Instruction </label>
          <div className="mb-2">
            <textarea rows="5" name="deathCause" placeholder='Write here ...' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none " />
          </div>

          <div className='flex justify-center my-4'>
            <button type="submit" className='px-4 py-2 rounded-lg bg-customGreen text-white'>Add Instruction</button>
          </div>

        </form>
      </Modal.Body>
    </Modal>
  )
}

export default NurseInstruction
