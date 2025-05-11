import React from "react";
import logo from "../../assets/images/Logo.svg";

const ReceiptPrintDownload = React.forwardRef(({ bill }, ref) => {
  if (!bill) return null;

  const patient = bill?.visit?.patient || {};
  const visitClinic = bill?.visit?.visit_clinics?.[0]?.clinic?.name || "N/A";
  const doctor = bill.bill_items[0]?.service_item?.doctor?.name || "Not Assigned";
  const insurance = bill.bill_items[0]?.service_item?.payment_type?.name || "N/A";
  const scheme = bill.bill_items[0]?.service_item?.scheme?.name || "N/A";

  return (
    <div ref={ref} className="w-[700px] mx-auto p-8 border text-sm text-black font-sans bg-white">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <div>
          <img src={logo} alt="Maimoon Hospital Logo" className="h-16" />
        </div>
        <div className="text-right text-xs">
          <p><strong>Maimoon Hospital</strong></p>
          <p>Malindi | P.O Box 985-80200</p>
          <p>Tel: 0780748578</p>
          <p>Email: frontoffice@maimoonhospital.com</p>
          <p>Website: www.maimoonmedicalcentre.com</p>
        </div>
      </div>

      {/* Patient Info */}
      <div className="grid grid-cols-2 gap-2 mb-2">
        <p><strong>Name:</strong> {patient.firstname} {patient.lastname}</p>
        <p><strong>Invoice No:</strong> {bill.bill_reference_number}</p>
        <p><strong>Reg No:</strong> {bill.patient_code}</p>
        <p><strong>Invoice Date:</strong> {bill.initiated_at}</p>
        <p><strong>Visit Code:</strong> VC-{bill.visit?.id}</p>
        <p><strong>Visit Date:</strong> {bill.visit?.created_at}</p>
        <p><strong>Insurance:</strong> {insurance}</p>
        <p><strong>Scheme:</strong> {scheme}</p>
        <p><strong>Membership No:</strong> {bill.patient_code}</p>
        <p><strong>Doctor:</strong> {doctor}</p>
        <p><strong>Diagnosis:</strong> {bill.reason || "Not Specified"}</p>
      </div>

      {/* Table Header */}
      <div className="border-t border-b py-2 my-4">
        <p className="font-semibold text-center">DETAILED INVOICE</p>
      </div>

      <table className="w-full text-left border mb-6">
        <thead className="bg-gray-100 text-sm">
          <tr className="border-b">
            <th className="py-1 px-2">Date</th>
            <th className="py-1 px-2">Ref No</th>
            <th className="py-1 px-2">Description</th>
            <th className="py-1 px-2">Qty</th>
            <th className="py-1 px-2">Rate (KES)</th>
            <th className="py-1 px-2">Amount (KES)</th>
          </tr>
        </thead>
        <tbody>
          {bill.bill_items.map((item, idx) => (
            <tr key={item.id} className="border-b text-sm">
              <td className="py-1 px-2">{item.created_at?.slice(0, 10) || "N/A"}</td>
              <td className="py-1 px-2">{item.visit_id || "MH-XXXX"}</td>
              <td className="py-1 px-2">{item.description}</td>
              <td className="py-1 px-2">{item.quantity}</td>
              <td className="py-1 px-2">{item.one_item_selling_price}</td>
              <td className="py-1 px-2">
                {(item.one_item_selling_price * item.quantity).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Totals */}
      <div className="text-sm mb-6">
        <p><strong>Total Amount (KES):</strong> {bill.balance.toLocaleString()}</p>
        <p><strong>Discount:</strong> {bill.discount.toLocaleString()}</p>
        <p><strong>Amount Payable (KES):</strong> {(bill.bill_amount - bill.discount).toLocaleString()}</p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-end text-sm mt-4">
        <p><strong>Served By:</strong> {bill.created_by || "Cashier"}</p>
        <p><strong>Patient’s Signature:</strong> ____________________</p>
      </div>
    </div>
  );
});

export { ReceiptPrintDownload };
