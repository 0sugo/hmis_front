import React from 'react'
import pic from '../../../assets/images/pic.svg'
import { MdEdit } from "react-icons/md";
import UpdateProfileInformation from './UpdateProfileInformation'
import UpdatePersonalInformation from './UpdatePersonalInformation'
import UpdateEmergenyContact from './UpdateEmergenyContact'
import UpdateEducationInformation from './UpdateEducationInformation'
import UpdateFamilyInformation from './UpdateFamilyInformation'
import UpdateExperience from './UpdateExperience'

const ViewEmployee = () => {

  // Modal to update personal information
  const openModal = () => {
    const dialog = document.getElementById('my_modal');
    if (dialog !== null) {
      dialog.showModal();
    }
  };

  // Modal to update emergeny contact
  const openModal2 = () => {
    const dialog = document.getElementById('my_modal_2');
    if (dialog !== null) {
      dialog.showModal();
    }
  };

  // Modal to update family information
  const openModal3 = () => {
    const dialog = document.getElementById('my_modal_3');
    if (dialog !== null) {
      dialog.showModal();
    }
  };

  // Modal to update education information
  const openModal4 = () => {
    const dialog = document.getElementById('my_modal_4');
    if (dialog !== null) {
      dialog.showModal();
    }
  };

  // Modal to update experience
  const openModal5 = () => {
    const dialog = document.getElementById('my_modal_5');
    if (dialog !== null) {
      dialog.showModal();
    }
  };

  // Modal to update profile information
  const openModal6 = () => {
    const dialog = document.getElementById('my_modal_6');
    if (dialog !== null) {
      dialog.showModal();
    }
  };


  return (
    <div className='mx-auto p-4'>
      <h4 className='font-semibold my-4'>Employee Management <span className='text-[#0E6F1E]'>> Idris   Maimoon </span></h4>

      <section className="bg-white p-4 rounded-lg">
        <button className='text-[#E7F1E9] bg-[#0E6F1E] hover:bg-[#0e4216] float-right p-1 rounded-full font-semibold' onClick={() => openModal6()}><MdEdit/></button>
        {/* Personal Information modal */}
        <dialog id="my_modal_6" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            {/* update Personal Information */}
            <section>
              <UpdateProfileInformation/>
            </section>
          </div>
        </dialog>
        <div className="flex flex-wrap p-4">
          <div className='flex flex-wrap gap-4 w-full lg:w-1/3 lg:border-r border-dashed border-slate-300'>
            <div>
              <img src={pic} className="w-36 h-36 rounded-full" alt="user" />
            </div>
            <div className='space-y-4 mb-4'>
              <div>
                <h5 className="text-[#192252] font-semibold">Idris Maimoon</h5>
                <p>Staff Member</p>
              </div>
              <div>
                <p>Member Id: 2323</p>
                <p>Date Of Joining: 24-01-2011</p>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-2/3 lg:pl-8'>
            <div className="flex justify-between">
              <h6>Phone:</h6>
              <p>23423098423</p>
            </div>
            <div className="flex justify-between">
              <h6>Email:</h6>
              <p>user@gmail.com</p>
            </div>
            <div className="flex justify-between">
              <h6>D.O.B:</h6>
              <p>12 Jun 1987</p>
            </div>
            <div className="flex justify-between">
              <h6>Address:</h6>
              <p>123 Ave, Manchester, 2445</p>
            </div>
            <div className="flex justify-between">
              <h6>Gender</h6>
              <p> Male</p>
            </div>
          </div>
        </div>
      </section>

      <section className='grid grid-cols-1 my-2 gap-4 md:grid-cols-2 lg:grid-cols-2'>
        <div className='bg-white p-4 rounded-lg'>
          <button className='text-[#E7F1E9] bg-[#0E6F1E] hover:bg-[#0e4216] float-right p-1 rounded-full font-semibold' onClick={() => openModal()}><MdEdit/></button>
          {/* Personal Information modal */}
          <dialog id="my_modal" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              </form>
              {/* update Personal Information */}
              <section>
              <UpdatePersonalInformation/>
              </section>
            </div>
          </dialog>
          <h5 className='text-[#0E6F1E] font-semibold'>Personal Information</h5>
          <div className='my-2'>
            <div className="flex justify-between">
              <h6>Passport Number:</h6>
              <p className='text-left'>23423098423</p>
            </div>
            <div className="flex justify-between">
              <h6>Passport Expiry:</h6>
              <p>user@gmail.com</p>
            </div>
            <div className="flex justify-between">
              <h6>Tel:</h6>
              <p>12 Jun 1987</p>
            </div>
            <div className="flex justify-between">
              <h6>Nationality:</h6>
              <p>123 Ave, Manchester, 2445</p>
            </div>
            <div className="flex justify-between">
              <h6>Religion:</h6>
              <p> Male</p>
            </div>
            <div className="flex justify-between">
              <h6>Marital Status:</h6>
              <p> Male</p>
            </div>
            <div className="flex justify-between">
              <h6>Employment of Spouce:</h6>
              <p> Male</p>
            </div>
            <div className="flex justify-between">
              <h6>No. of Children:</h6>
              <p> 1</p>
            </div>
          </div>
        </div>
        <div className='bg-white p-4 rounded-lg'>
          <div className="flex items-center justify-between">
            <h5 className='text-[#0E6F1E] font-semibold'>Emergency Contact</h5>
            <button className='text-[#E7F1E9] bg-[#0E6F1E] hover:bg-[#0e4216] p-1 rounded-full font-semibold' onClick={() => openModal2()}><MdEdit/></button>
            {/* Personal Information modal */}
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                {/* update Emergency Contact */}
                <section>
                <UpdateEmergenyContact/>
                </section>
              </div>
            </dialog>
          </div>
          <div className='my-2'>
            <h6><b>Primary</b></h6>
            <div className="flex justify-between mt-1">
              <h6>Name:</h6>
              <p>John</p>
            </div>
            <div className="flex justify-between">
              <h6>Relationship:</h6>
              <p>user@gmail.com</p>
            </div>
            <div className="flex justify-between mb-2">
              <h6>Phone:</h6>
              <p>12 Jun 1987</p>
            </div>
            <hr />
            <h6 className='mt-2'><b>Secondary</b></h6>
            <div className="flex justify-between mt-1">
              <h6>Name:</h6>
              <p>John</p>
            </div>
            <div className="flex justify-between">
              <h6>Relationship:</h6>
              <p>user@gmail.com</p>
            </div>
            <div className="flex justify-between">
              <h6>Phone:</h6>
              <p>12 Jun 1987</p>
            </div>
          </div>
        </div>
        <div className='bg-white p-4 rounded-lg'>
          <h5 className='text-[#0E6F1E] font-semibold'>Bank Information</h5>
          <div className='my-2'>
            <div className="flex justify-between">
              <h6>Bank Name:</h6>
              <p>John</p>
            </div>
            <div className="flex justify-between">
              <h6>Bank Account No.:</h6>
              <p>234324234</p>
            </div>
            <div className="flex justify-between mb-2">
              <h6>IFSC Code:</h6>
              <p>1987</p>
            </div>
            <div className="flex justify-between mb-2">
              <h6>Pan No:</h6>
              <p>87</p>
            </div>
          </div>
        </div>
        <div className='bg-white p-4 rounded-lg'>
          <div className="flex items-center justify-between">
            <h5 className='text-[#0E6F1E] font-semibold'>Family Information</h5>
            <button className='text-[#E7F1E9] bg-[#0E6F1E] hover:bg-[#0e4216] p-1 rounded-full font-semibold' onClick={() => openModal3()}><MdEdit/></button>
            {/* Family Information modal */}
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                {/* update Family Information */}
                <section>
                <UpdateFamilyInformation/>
                </section>
              </div>
            </dialog>
          </div>
        </div>
        <div className='bg-white p-4 rounded-lg'>
          <div className="flex items-center justify-between">
            <h5 className='text-[#0E6F1E] font-semibold'>Education Information</h5>
            <button className='text-[#E7F1E9] bg-[#0E6F1E] hover:bg-[#0e4216] p-1 rounded-full font-semibold' onClick={() => openModal4()}><MdEdit/></button>
            {/* Education Information modal */}
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                {/* update Education Information */}
                <section>
                <UpdateEducationInformation/>
                </section>
              </div>
            </dialog>
          </div>
        </div>
        <div className='bg-white p-4 rounded-lg'>
          <div className="flex items-center justify-between">
            <h5 className='text-[#0E6F1E] font-semibold'>Experience</h5>
            <button className='text-[#E7F1E9] bg-[#0E6F1E] hover:bg-[#0e4216] p-1 rounded-full font-semibold' onClick={() => openModal5()}><MdEdit/></button>
            {/* Experience modal */}
            <dialog id="my_modal_5" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                {/* update Experience */}
                <section>
                <UpdateExperience/>
                </section>
              </div>
            </dialog>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default ViewEmployee
