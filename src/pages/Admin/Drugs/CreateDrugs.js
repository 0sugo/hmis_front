import React, { useState } from 'react'
import axios from '../../../api/api'
import { toast } from 'sonner'

const CreateDrug = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [amount_in_stock, setamount_in_stock] = useState('')
  const [price_per_item, setPrice_per_item] = useState('')
  const [brand, setBrand] = useState('')
  const [expiry_date, setExpiry_date] = useState('')
  const [requires_approval, setRequires_approval] = useState(false)
  const [unit, setUnit] = useState('')
  const [smallest_sellable_quantity, setSmallest_sellable_quantity] = useState('')
  const [mark_up_type, setMark_up_type] = useState('Fixed')
  const [mark_up_value, setMark_up_value] = useState('')
  const [promotion_type, setPromotion_type] = useState('Percentage')
  const [promotion_value, setPromotion_value] = useState('')
  const [income_account, setIncome_account] = useState('')
  const [asset_account, setAsset_account] = useState('')
  const [expense_account, setExpense_account] = useState('')
  const [payment_type, setPayment_type] = useState('cash')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      await axios.post('/api/drugs/create', { 
        name, 
        description, 
        amount_in_stock, 
        price_per_item, 
        brand, 
        expiry_date,
        requires_approval,
        unit,
        smallest_sellable_quantity,
        mark_up_type,
        mark_up_value,
        promotion_type,
        promotion_value,
        income_account,
        asset_account,
        expense_account,
        payment_type
      })
      toast.success('Drug Created')
      setName('')
      setDescription('')
      setamount_in_stock('')
      setPrice_per_item('')
      setBrand('')
      setExpiry_date('')
      setRequires_approval(false)
      setUnit('')
      setSmallest_sellable_quantity('')
      setMark_up_type('Fixed')
      setMark_up_value('')
      setPromotion_type('Percentage')
      setPromotion_value('')
      setIncome_account('')
      setAsset_account('')
      setExpense_account('')
      setPayment_type('cash')
      setTimeout(() => {
        window.location.reload()
      }, 1000)
    } catch (error) {
      console.log('Error:', error)
      if (!error?.response) {
        setError('Network error! Check your connection.')
      } else if (error.response.status >= 500) {
        setError('Server error! Please try again later.')
      } else {
        setError(error.response.data?.message || 'An unexpected error occurred.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h4 className="text-2xl font-bold text-center mb-6 text-gray-800">Create Drug</h4>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md max-h-[80vh] overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Drug Name</span>
            </label>
            <input
              type="text"
              required
              placeholder="Enter drug name"
              className="input input-bordered w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Description</span>
            </label>
            <input
              type="text"
              required
              placeholder="Enter description"
              className="input input-bordered w-full"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">In Stock</span>
            </label>
            <input
              type="number"
              required
              placeholder="Enter stock amount"
              className="input input-bordered w-full"
              value={amount_in_stock}
              onChange={(e) => setamount_in_stock(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Price per Item</span>
            </label>
            <input
              type="number"
              required
              placeholder="Enter price"
              className="input input-bordered w-full"
              value={price_per_item}
              onChange={(e) => setPrice_per_item(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Brand</span>
            </label>
            <input
              type="text"
              required
              placeholder="Enter brand"
              className="input input-bordered w-full"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Expiry Date</span>
            </label>
            <input
              type="date"
              required
              className="input input-bordered w-full"
              value={expiry_date}
              onChange={(e) => setExpiry_date(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Requires Approval</span>
            </label>
            <input
              type="checkbox"
              className="toggle toggle-primary"
              checked={requires_approval}
              onChange={(e) => setRequires_approval(e.target.checked)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Unit</span>
            </label>
            <input
              type="text"
              required
              placeholder="Enter unit (e.g., Tablets)"
              className="input input-bordered w-full"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Smallest Sellable Quantity</span>
            </label>
            <input
              type="number"
              required
              placeholder="Enter smallest sellable quantity"
              className="input input-bordered w-full"
              value={smallest_sellable_quantity}
              onChange={(e) => setSmallest_sellable_quantity(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Mark Up Type</span>
            </label>
            <select
              className="select select-bordered w-full"
              value={mark_up_type}
              onChange={(e) => setMark_up_type(e.target.value)}
            >
              <option value="Fixed">Fixed</option>
              <option value="Percentage">Percentage</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Mark Up Value</span>
            </label>
            <input
              type="number"
              required
              placeholder="Enter mark up value"
              className="input input-bordered w-full"
              value={mark_up_value}
              onChange={(e) => setMark_up_value(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Promotion Type</span>
            </label>
            <select
              className="select select-bordered w-full"
              value={promotion_type}
              onChange={(e) => setPromotion_type(e.target.value)}
            >
              <option value="Percentage">Percentage</option>
              <option value="Fixed">Fixed</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Promotion Value</span>
            </label>
            <input
              type="number"
              required
              placeholder="Enter promotion value"
              className="input input-bordered w-full"
              value={promotion_value}
              onChange={(e) => setPromotion_value(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Income Account</span>
            </label>
            <input
              type="text"
              required
              placeholder="Enter income account"
              className="input input-bordered w-full"
              value={income_account}
              onChange={(e) => setIncome_account(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Asset Account</span>
            </label>
            <input
              type="text"
              required
              placeholder="Enter asset account"
              className="input input-bordered w-full"
              value={asset_account}
              onChange={(e) => setAsset_account(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Expense Account</span>
            </label>
            <input
              type="text"
              required
              placeholder="Enter expense account"
              className="input input-bordered w-full"
              value={expense_account}
              onChange={(e) => setExpense_account(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Payment Type</span>
            </label>
            <select
              className="select select-bordered w-full"
              value={payment_type}
              onChange={(e) => setPayment_type(e.target.value)}
            >
              <option value="cash">Cash</option>
              <option value="credit">Credit</option>
              <option value="debit">Debit</option>
            </select>
          </div>
        </div>
        <div className="text-center mt-6">
          <button
            type="submit"
            disabled={loading}
            className={`btn btn-primary w-full md:w-auto px-8 ${loading ? 'loading' : ''}`}
          >
            {loading ? 'Creating...' : 'Create Drug'}
          </button>
        </div>
        {error && (
          <div className="alert alert-error mt-4">
            <div className="flex-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-6 h-6 mx-2 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18.364 5.636l-12.728 12.728m12.728 0L5.636 5.636"
                ></path>
              </svg>
              <span>{error}</span>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}

export default CreateDrug