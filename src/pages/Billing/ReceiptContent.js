// export const ReceiptContent = ({ bill }) => {
//     return (
//       <div className="receipt">
//         <h2>Receipt</h2>
//         <p><strong>Patient Name:</strong> {bill.patient_first_name} {bill.patient_last_name}</p>
//         <p><strong>Patient Age:</strong> {bill.patient_age}</p>
//         <p><strong>Patient Gender:</strong> {bill.patient_gender}</p>
//         <p><strong>Reg Number:</strong> {bill.reg_number}</p>
//         <p><strong>Visit Code:</strong> {bill.visit_code}</p>
//         <p><strong>Visit Date:</strong> {bill.visit_date}</p>
//         <p><strong>Insurance:</strong> {bill.insurance}</p>
//         <p><strong>Scheme:</strong> {bill.scheme}</p>
//         <p><strong>Member No:</strong> {bill.member_no}</p>
//         <p><strong>Invoice No:</strong> {bill.invoice_no}</p>
//         <p><strong>Invoice Date:</strong> {bill.invoice_date}</p>
//         <p><strong>Diagnosis:</strong> {bill.diagnosis}</p>
//         <p><strong>Doctor:</strong> {bill.doctor}</p>
  
//         <table>
//           <thead>
//             <tr>
//               <th>No.</th>
//               <th>Detail</th>
//               <th>Quantity</th>
//               <th>Unit Cost</th>
//               <th>Discount</th>
//               <th>Total</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bill.services.map((service, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>{service.detail}</td>
//                 <td>{service.quantity}</td>
//                 <td>{service.unit_cost}</td>
//                 <td>{service.discount}</td>
//                 <td>{service.total}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
  
//         <p><strong>Sub-Total Amount:</strong> {bill.sub_total}</p>
//         <p><strong>Discount:</strong> {bill.discount}</p>
//         <p><strong>Total:</strong> {bill.total}</p>
//       </div>
//     );
//   };
  