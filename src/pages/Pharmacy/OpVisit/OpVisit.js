import React from 'react'
import { Link } from 'react-router-dom'
import newPatient from '../../../assets/images/newPatient.svg'

const OpVisit = () => {
  return (
    <div className='mx-auto p-4'>
      <section className="bg-white p-4 rounded-lg">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Link to='/app/pharmacyapproval'>
            <div className='bg-[#F3E8FF] p-4 rounded-lg flex items-center gap-4'>
              <div className='bg-[#8D49D4] p-3 rounded-full'>
                <img src={newPatient} alt="patient" />
              </div>
              <p>Pharmacy Approval</p>
            </div>
          </Link>
          <Link to='/app/opprescription'>
            <div className='bg-[#DDE0FF] p-4 rounded-lg flex items-center gap-4'>
              <div className='bg-[#676BA9] p-3 rounded-full'>
                <img src={newPatient} alt="patient" />
              </div>
              <p>Op Prescription</p>
            </div>
          </Link>
          <Link to='/app/opprintlabels'>
            <div className='bg-[#FFE2E5] p-4 rounded-lg flex items-center gap-4'>
              <div className='bg-[#FA5A7D] p-3 rounded-full'>
                <img src={newPatient} alt="patient" />
              </div>
              <p>Op Print Lables/Returns</p>
            </div>
          </Link>
          <Link to='/app/ipmedicineissue'>
            <div className='bg-[#C3E7C9] p-4 rounded-lg flex items-center gap-4'>
              <div className='bg-[#008717] p-3 rounded-full'>
                <img src={newPatient} alt="patient" />
              </div>
              <p>Ip Medicine Issue</p>
            </div>
          </Link>
          <Link to='/app/ipprintlabels'>
            <div className='bg-[#F1D5AC] p-4 rounded-lg flex items-center gap-4'>
              <div className='bg-[#DB9226] p-3 rounded-full'>
                <img src={newPatient} alt="patient" />
              </div>
              <p>Ip Print Labels/Return</p>
            </div>
          </Link>
          <Link to='/app/ipmedicinerequest'>
            <div className='bg-[#FCF0C4] p-4 rounded-lg flex items-center gap-4'>
              <div className='bg-[#CDA000] p-3 rounded-full'>
                <img src={newPatient} alt="patient" />
              </div>
              <p>Ip Medicine Request</p>
            </div>
          </Link>
          <Link to='/app/processpackage'>
            <div className='bg-[#DEF3FF] p-4 rounded-lg flex items-center gap-4'>
              <div className='bg-[#67C8FF] p-3 rounded-full'>
                <img src={newPatient} alt="patient" />
              </div>
              <p>Process Package</p>
            </div>
          </Link>
          <Link to='/app/ipdrugstatement'>
            <div className='bg-[#DEDEDE] p-4 rounded-lg flex items-center gap-4'>
              <div className='bg-[#7A7A7A] p-3 rounded-full'>
                <img src={newPatient} alt="patient" />
              </div>
              <p>Ip Drug Statement</p>
            </div>
          </Link>
          <Link to='/app/amendipprescription'>
            <div className='bg-[#F3E8FF] p-4 rounded-lg flex items-center gap-4'>
              <div className='bg-[#67C8FF] p-3 rounded-full'>
                <img src={newPatient} alt="patient" />
              </div>
              <p>Amend Ip Prescription</p>
            </div>
          </Link>
          <Link to='/app/dischargemedreturn'>
            <div className='bg-[#FFE2E5] p-4 rounded-lg flex items-center gap-4'>
              <div className='bg-[#FA5A7D] p-3 rounded-full'>
                <img src={newPatient} alt="patient" />
              </div>
              <p>Discharge Med. Return</p>
            </div>
          </Link>
          <Link to='/app/opdrughistory'>
            <div className='bg-[#DEF3FF] p-4 rounded-lg flex items-center gap-4'>
              <div className='bg-[#67C8FF] p-3 rounded-full'>
                <img src={newPatient} alt="patient" />
              </div>
              <p>Op Drug History</p>
            </div>
          </Link>
          <Link to='/app/refundpendingdrug'>
            <div className='bg-[#F1D5AC] p-4 rounded-lg flex items-center gap-4'>
              <div className='bg-[#DB9226] p-3 rounded-full'>
                <img src={newPatient} alt="patient" />
              </div>
              <p>Refund Pending Drugs</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default OpVisit
