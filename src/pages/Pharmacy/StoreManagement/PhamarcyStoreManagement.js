import React from 'react'
import { Link } from 'react-router-dom'
import { FaUsersCog, FaRegEye, FaBook, FaHome, FaUnlockAlt } from "react-icons/fa";
import { FaArrowsUpDown, FaFileInvoiceDollar } from "react-icons/fa6";
import { IoIosStats } from "react-icons/io";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdOutlineAutoGraph, MdAnalytics } from "react-icons/md";

const PhamarcyStoreManagement = () => {
  return (
    <div className='mx-auto p-4'>
      <h4 className='font-semibold text-[#192252]'>Store Management</h4>

      <section className='bg-white p-4 rounded-lg my-4'>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          <Link to='/app/newrequisition' className='p-4 shadow-lg rounded-lg hover:shadow-xl'>
            <div  className='text-center space-y-3'>
              <div className='flex items-center justify-center'>
                <div className='bg-[#DBFFDE] text-[#0E6F1E] p-2 rounded-full flex items-center justify-center w-14'>
                  <h1><FaUsersCog /></h1>
                </div>
              </div>
              <h6>New Requisition</h6>
            </div>
          </Link>
          <Link to='/app/viewrequisition' className='p-4 shadow-lg rounded-lg hover:shadow-xl'>
            <div  className='text-center space-y-3'>
              <div className='flex items-center justify-center'>
                <div className='bg-[#DBFFDE] text-[#0E6F1E] p-2 rounded-full flex items-center justify-center w-14'>
                  <h1><FaRegEye /></h1>
                </div>
              </div>
              <h6>View Requisition</h6>
            </div>
          </Link>
          <Link to='/app/minreorderlevels' className='p-4 shadow-lg rounded-lg hover:shadow-xl'>
            <div  className='text-center space-y-3'>
              <div className='flex items-center justify-center'>
                <div className='bg-[#DBFFDE] text-[#0E6F1E] p-2 rounded-full flex items-center justify-center w-14'>
                  <h1><FaArrowsUpDown /></h1>
                </div>
              </div>
              <h6>Min Reorder Levels</h6>
            </div>
          </Link>
          <Link to='/app/drugexpiryreport' className='p-4 shadow-lg rounded-lg hover:shadow-xl'>
            <div  className='text-center space-y-3'>
              <div className='flex items-center justify-center'>
                <div className='bg-[#DBFFDE] text-[#0E6F1E] p-2 rounded-full flex items-center justify-center w-14'>
                  <h1><IoIosStats /></h1>
                </div>
              </div>
              <h6>Drug Expiry Report</h6>
            </div>
          </Link>
          <Link to='/app/ddr-report' className='p-4 shadow-lg rounded-lg hover:shadow-xl'>
            <div  className='text-center space-y-3'>
              <div className='flex items-center justify-center'>
                <div className='bg-[#DBFFDE] text-[#0E6F1E] p-2 rounded-full flex items-center justify-center w-14'>
                  <h1><FaBook /></h1>
                </div>
              </div>
              <h6>DDR Report</h6>
            </div>
          </Link>
          <Link to='/app/stocktake' className='p-4 shadow-lg rounded-lg hover:shadow-xl'>
            <div  className='text-center space-y-3'>
              <div className='flex items-center justify-center'>
                <div className='bg-[#DBFFDE] text-[#0E6F1E] p-2 rounded-full flex items-center justify-center w-14'>
                  <h1><BsGraphUpArrow /></h1>
                </div>
              </div>
              <h6>Stock Take</h6>
            </div>
          </Link>
          <Link to='/app/stockmovementreport' className='p-4 shadow-lg rounded-lg hover:shadow-xl'>
            <div  className='text-center space-y-3'>
              <div className='flex items-center justify-center'>
                <div className='bg-[#DBFFDE] text-[#0E6F1E] p-2 rounded-full flex items-center justify-center w-14'>
                  <h1><MdAnalytics /></h1>
                </div>
              </div>
              <h6>Stock Movement Report</h6>
            </div>
          </Link>
          <Link to='/app/openingstockentry' className='p-4 shadow-lg rounded-lg hover:shadow-xl'>
            <div  className='text-center space-y-3'>
              <div className='flex items-center justify-center'>
                <div className='bg-[#DBFFDE] text-[#0E6F1E] p-2 rounded-full flex items-center justify-center w-14'>
                  <h1><FaHome /></h1>
                </div>
              </div>
              <h6>Opening Stock Entry</h6>
            </div>
          </Link>
          <Link to='/app/closingstockreport' className='p-4 shadow-lg rounded-lg hover:shadow-xl'>
            <div  className='text-center space-y-3'>
              <div className='flex items-center justify-center'>
                <div className='bg-[#DBFFDE] text-[#0E6F1E] p-2 rounded-full flex items-center justify-center w-14'>
                  <h1><FaUnlockAlt /></h1>
                </div>
              </div>
              <h6>Closing Stock Report</h6>
            </div>
          </Link>
          <Link to='/app/consumptionreport' className='p-4 shadow-lg rounded-lg hover:shadow-xl'>
            <div  className='text-center space-y-3'>
              <div className='flex items-center justify-center'>
                <div className='bg-[#DBFFDE] text-[#0E6F1E] p-2 rounded-full flex items-center justify-center w-14'>
                  <h1><FaFileInvoiceDollar /></h1>
                </div>
              </div>
              <h6>Consumption Report</h6>
            </div>
          </Link>
          <Link to='/app/nonmovingstockreport' className='p-4 shadow-lg rounded-lg hover:shadow-xl'>
            <div  className='text-center space-y-3'>
              <div className='flex items-center justify-center'>
                <div className='bg-[#DBFFDE] text-[#0E6F1E] p-2 rounded-full flex items-center justify-center w-14'>
                  <h1><MdAnalytics /></h1>
                </div>
              </div>
              <h6>Non-Moving Stock Report</h6>
            </div>
          </Link>
          <Link to='/app/companypricelist' className='p-4 shadow-lg rounded-lg hover:shadow-xl'>
            <div  className='text-center space-y-3'>
              <div className='flex items-center justify-center'>
                <div className='bg-[#DBFFDE] text-[#0E6F1E] p-2 rounded-full flex items-center justify-center w-14'>
                  <h1><FaFileInvoiceDollar /></h1>
                </div>
              </div>
              <h6>Company Price List</h6>
            </div>
          </Link>
          <Link to='/app/stockvariancereport' className='p-4 shadow-lg rounded-lg hover:shadow-xl'>
            <div  className='text-center space-y-3'>
              <div className='flex items-center justify-center'>
                <div className='bg-[#DBFFDE] text-[#0E6F1E] p-2 rounded-full flex items-center justify-center w-14'>
                  <h1><MdOutlineAutoGraph /></h1>
                </div>
              </div>
              <h6>Stock Variance Report</h6>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default PhamarcyStoreManagement
