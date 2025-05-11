import Topnav from './components/Nav/TopBar';
import Sidebar from './components/Nav/SideBar';
import { useStateContext } from './components/Context/ContextProvider';
import AuthToken from './components/Context/AuthToken';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';

import Login from './pages/Login';

import Unauthorised from './pages/Unauthorised';
import Missing from './pages/Missing';
import Home from './pages/Home';

import Departments from './pages/Admin/Departments'
import ViewDepartment from './pages/Admin/ViewDepartment'
import UpdateDepartment from './pages/Admin/UpdateDepartment'
import Schemes from './pages/Admin/Schemes'
import ViewScheme from './pages/Admin/ViewScheme'
import UpdateScheme from './pages/Admin/UpdateScheme'
import Employee from './pages/Admin/Employees'
import ViewAdminEmployee from './pages/Admin/ViewAdminEmployee'
import UpdateEmployee from './pages/Admin/UpdateEmployee'
import Vendors from './pages/Admin/Vendors'
import Accounts from './pages/Admin/Accounts'
import HospitalData from './pages/Admin/HospitalData'
import ProductPriceList from './pages/Admin/ProductPriceList'
import ToDoList from './pages/Admin/ToDoList'
import Clinic from './pages/Admin/Clinic/Clinic'
import CreateClinic from './pages/Admin/Clinic/CreateClinic'
import UpdateClinic from './pages/Admin/Clinic/UpdateClinic'
import ViewClinic from './pages/Admin/Clinic/ViewClinic'
import Payment from './pages/Admin/Payment/Payment'
import CreatePayment from './pages/Admin/Payment/CreatePayment'
import ViewPayment from './pages/Admin/Payment/ViewPayment'
import UpdatePayment from './pages/Admin/Payment/UpdatePayment'
import ViewBrand from './pages/Admin/Brand/ViewBrand'
import UpdateBrand from './pages/Admin/Brand/UpdateBrand'
import ViewChronic from './pages/Admin/ChronicDisease/ViewChronic'
import UpdateChronic from './pages/Admin/ChronicDisease/UpdateChronic'
import ViewImageTest from './pages/Admin/ImageTest/ViewImageTest'
import UpdateImageTest from './pages/Admin/ImageTest/UpdateImageTest'
import ViewLabTest from './pages/Admin/LabTest/ViewLabTest'
import UpdateLabTest from './pages/Admin/LabTest/UpdateLabTest'
import ViewImageClass from './pages/Admin/ImageClass/ViewImageClass'
import UpdateImageClass from './pages/Admin/ImageClass/UpdateImageClass'
import ViewLabClass from './pages/Admin/LabClass/ViewLabClass'
import UpdateLabClass from './pages/Admin/LabClass/UpdateLabClass'
import ViewImageRequest from './pages/Admin/ImageRequest/ViewImageRequest'
import UpdateImageRequest from './pages/Admin/ImageRequest/UpdateImageRequest'
import ViewLabRequest from './pages/Admin/LabRequest/ViewLabRequest'
import UpdateLabRequest from './pages/Admin/LabRequest/UpdateLabRequest'
import ViewPhysical from './pages/Admin/PhysicalExamination/ViewPhysical'
import UpdatePhysical from './pages/Admin/PhysicalExamination/UpdatePhysical'
import ViewSymptoms from './pages/Admin/Symptoms/ViewSymptoms'
import UpdateSymptoms from './pages/Admin/Symptoms/UpdateSymptoms'
import ViewDrug from './pages/Admin/Drugs/ViewDrug'
import UpdateDrug from './pages/Admin/Drugs/UpdateDrug'
import ViewDrugFormula from './pages/Admin/DrugFormulas/ViewDrugFormula'
import UpdateDrugFormula from './pages/Admin/DrugFormulas/UpdateDrugFormula'

import DashBoard from './pages/Doctor/Dashboard'
import DashboardIP from './pages/Doctor/DashboardIP'
import PatientList from './pages/Doctor/PatientList'
import PatientInfo from './pages/Doctor/PatientsInfo'
import DoctorPatientView from './pages/Doctor/DoctorsPatientView'
import MaternityDashboard from './pages/Doctor/MaternityDashboard'
import DoctorDaycare from './pages/Doctor/DoctorDaycare'
import Calculators from './pages/Doctor/Calculators'
import PatientEducation from './pages/Doctor/PatientEducation'
import Guidelines from './pages/Doctor/Guidelines'

import NurseOpDashboard from './pages/Nurse/NurseOpDashboard'
import NurseTemplate from './pages/Nurse/NurseTemplate';
import OpNurseOrders from './pages/Nurse/OpNurseOrders'
import NurseIpDashboard from './pages/Nurse/NurseIpDashboard'
import WardTransfer from './pages/Nurse/WardTransfer'
import WardTransferform from './pages/Nurse/WardTransferForm'
import DayCare from './pages/Nurse/Daycare'
import NurseReports from './pages/Nurse/NurseReports'
import ViewNurseReports from './pages/Nurse/ViewNurseReports'

import Phleobotomy from './pages/Labaratory/Phleobotomy'
import Samples from './pages/Labaratory/Samples'
import Storage from './pages/Labaratory/Storage'
import WorkList from './pages/Labaratory/WorkList'
import LabTest from './pages/Labaratory/LabTest'
import LabRequests from './pages/Labaratory/LabRequests'
import GenerateRequest from './pages/Labaratory/GenerateRequest'
import ApprovedLabRequest from './pages/Labaratory/ApprovedLabRequest'
import InstrumentCalling from './pages/Labaratory/InstrumentCalin'
import PackageShipment from './pages/Labaratory/PackageShipment'
import Orders from './pages/Labaratory/Orders'
import ViewOrder from './pages/Labaratory/ViewOrder'
import Reports from './pages/Labaratory/Reports'
import ViewLabReport from './pages/Labaratory/ViewLabReport'
import AddLabResult from './pages/Labaratory/AddLabResult'
import LabManagement from './pages/Labaratory/LabManagement'

import Requests from './pages/Imaging/Requests'
import Patient from './pages/Imaging/Patient'
import ImagingProcess from './pages/Imaging/ImagingProcess'
import ImagingReports from './pages/Imaging/ImagingReports'
import StoreManagement from './pages/Imaging/StoreManagement'
import ViewStore from './pages/Imaging/ViewStore'
import NewOrder from './pages/Imaging/NewOrder'
import ViewImagingPatient from './pages/Imaging/ViewImagingPatient'
import ImagingForm from './pages/Imaging/ImagingForm'

import OpVisit from './pages/Pharmacy/OpVisit/OpVisit'
import PharmacyApproval from './pages/Pharmacy/OpVisit/PharmacyApproval'
import OpPrescription from './pages/Pharmacy/OpVisit/OpPrescription'
import OpPrintLabels from './pages/Pharmacy/OpVisit/OpPrintLabels'
import IpMedicineIssue from './pages/Pharmacy/OpVisit/IpMedicineIssue'
import IpPrintLabels from './pages/Pharmacy/OpVisit/IpPrintLabels'
import IpMedicineRequest from './pages/Pharmacy/OpVisit/IpMedicineRequest'
import ProcessPackage from './pages/Pharmacy/OpVisit/ProcessPackage'
import IpDrugStatement from './pages/Pharmacy/OpVisit/IpDrugStatement'
import AmendIpPrescription from './pages/Pharmacy/OpVisit/AmendIpPrescription'
import DischargeMedReturn from './pages/Pharmacy/OpVisit/DischargeMedReturn'
import OpDrugHistory from './pages/Pharmacy/OpVisit/OpDrugHistory'
import RefundPendingDrug from './pages/Pharmacy/OpVisit/RefundPendingDrug'

import WalkinPrescription from './pages/Pharmacy/WalkinPrescription'
import OpPrescriptions from './pages/Pharmacy/OpPrescriptions'
import ViewOpPrescription from './pages/Pharmacy/ViewOpPrescription'
import IpPrescription from './pages/Pharmacy/IpPrescription'
import ViewIpPrescription from './pages/Pharmacy/ViewIpPrescription'
import PrescriptionDetail from './pages/Pharmacy/PrescriptionDetail'
import PhamarcyStoreManagement from './pages/Pharmacy/StoreManagement/PhamarcyStoreManagement'
import NewRequisition from './pages/Pharmacy/StoreManagement/NewRequisition'
import ViewRequisition from './pages/Pharmacy/StoreManagement/ViewRequisition'
import MinReorderLevels from './pages/Pharmacy/StoreManagement/MinReorderLevels'
import DrugExpiryReport from './pages/Pharmacy/StoreManagement/DrugExpiryReport'
import DdrReport from './pages/Pharmacy/StoreManagement/DdrReport'
import StockTake from './pages/Pharmacy/StoreManagement/StockTake'
import StockMovementReport from './pages/Pharmacy/StoreManagement/StockMovementReport'
import OpeningStockEntry from './pages/Pharmacy/StoreManagement/OpeningStockEntry'
import ClosingStockReport from './pages/Pharmacy/StoreManagement/ClosingStockReport'
import ConsumptionReport from './pages/Pharmacy/StoreManagement/ConsumptionReport'
import NonMovingStockReport from './pages/Pharmacy/StoreManagement/NonmovingStockReport'
import CompanyPriceList from './pages/Pharmacy/StoreManagement/CompanyPriceList'
import StockVarianceReport from './pages/Pharmacy/StoreManagement/StockVarianceReport'
import ViewOpeningStock from './pages/Pharmacy/StoreManagement/ViewOpeningStock'
import PatientDetails from './pages/Pharmacy/StoreManagement/PatientDetails'

import FoDashboard from './pages/FrontOffice/FoDashboard'
import ListPatients from './pages/FrontOffice/ListPatients'
import AddPatient from './pages/FrontOffice/AddPatient'
import ViewPatient from './pages/FrontOffice/ViewPatient'
import UpdatePatient from './pages/FrontOffice/UpdatePatient'
import PatientRegistration from './pages/FrontOffice/PatientRegistration'
import ListEmergencyVisit from './pages/FrontOffice/ListEmergencyVisit'
import ViewEmergencyVisit from './pages/FrontOffice/ViewEmergencyVisit'
import UpdateEmergencyVisit from './pages/FrontOffice/UpdateEmergencyVisit'
import ViewNewVisit from './pages/FrontOffice/ViewNewVisit'
import UpdateNewVisit from './pages/FrontOffice/UpdateNewVisit'

import ProcurementRequest from './pages/Procurement/ProcurementRequest'
import ViewProcurementRequest from './pages/Procurement/ViewProcurementRequest'
import PurchaseOrder from './pages/Procurement/PurchaseOrder'
import ViewPurchasedOrder from './pages/Procurement/ViewPurchasedOrder'
import PastOrder from './pages/Procurement/PastOrder'
import PriceList from './pages/Procurement/PriceList'
import ViewPriceList from './pages/Procurement/ViewPriceList'
import AddNewPriceList from './pages/Procurement/AddNewPriceList'
import VendorList from './pages/Procurement/VendorList'
import ViewVendorList from './pages/Procurement/ViewVendorList'
import ProcumentAnalysis from './pages/Procurement/ProcurementAnalysis'
import AddNewProduct from './pages/Procurement/AddNewProduct'
import AllProducts from './pages/Procurement/AllProducts'
import Supplier from './pages/Procurement/Supplier'
import Notes from './pages/Procurement/Notes'
import ViewGoodsReceiveNote from './pages/Procurement/ViewGoodsReceiveNote'
import ViewGoodsReturnNote from './pages/Procurement/ViewGoodsReturnNote'
import GenerateReceiveNote from './pages/Procurement/GenerateReceiveNote'
import GenerateReturnNote from './pages/Procurement/GenerateReturnNote'

import ShiftManagement from './pages/Hr/ShiftManagement'
import ViewShift from './pages/Hr/ViewShift'
import UpdateShift from './pages/Hr/UpdateShift'
import Shifts from './pages/Hr/Shifts'
import AssignShift from './pages/Hr/AssignShift'
import Payroll from './pages/Hr/Payroll/Payroll'
import AddSalary from './pages/Hr/Payroll/AddSalary'
import LeaveManagement from './pages/Hr/LeaveManagement/LeaveManagement'
import ViewLeave from './pages/Hr/LeaveManagement/ViewLeave'
import AddLeave from './pages/Hr/LeaveManagement/AddLeave'
import EmployeeManagement from './pages/Hr/EmployeeManagement/EmployeeManagement'
import AddEmployee from './pages/Hr/EmployeeManagement/AddEmployee'
import ViewEmployee from './pages/Hr/EmployeeManagement/ViewEmployee'
import IncidentReporting from './pages/Hr/IncidentReporting'
import AdvanceSalary from './pages/Hr/Salary/AdvanceSalary'
import ViewAdvanceSalary from './pages/Hr/Salary/ViewAdvanceSalary'
import TimeAttendance from './pages/Hr/TimeAttendance'
import Recruitment from './pages//Hr/Recruitment'
import ReportingAnalysis from './pages/Hr/ReportingAnalysis'
import Memos from './pages/Hr/Memos'
import DepartmentalHeads from './pages/Hr/DepartmentHeads'

import Procurement from './pages/Inventory/Procurement'
import SupplierManagement from './pages/Inventory/SupplierManagement'
import ProcurementAnalysis from './pages/Inventory/ProcurementAnalysis'
import StrategicPurchasing from './pages/Inventory/StrategicPurchasing'

import BillingDasboard from './pages/Billing/BillingDashboard'
import CredirPatientBilling from './pages/Billing/CreditPatientBilling'
import ReceiptDetails from './pages/Billing/ReceiptDetails'
import InvoiceDetails from './pages/Billing/InvoiceDetails'
import CashBilling from './pages/Billing/CashBilling'
import ClaimManagement from './pages/Billing/ClaimManagement'
import GenerateClaim from './pages/Billing/GenerateClaim'
import InpatientBilling from './pages/Billing/InpatientBilling'
import ViewInpatientBill from './pages/Billing/ViewInpatientBill'
import AddBill from './pages/Billing/AddBill'
import ApprovalDesk from './pages/Billing/ApprovalDesk'
import ViewApproval from './pages/Billing/ViewApproval'
import BillingReports from './pages/Billing/BillingReports'
import BillQuote from './pages/Billing/BillQuote'
import EmergencyVisit from './pages/FrontOffice/EmergencyVisit';
import NewVisit from './pages/FrontOffice/NewVisit';
import CreatePersonalVisit from './pages/FrontOffice/CreatePersonalVisit';
import Appointment from './pages/FrontOffice/Appointment';
import NurseTriageInfo from './pages/Nurse/NurseTriageInfo';
import IPDoctorsPatientView from './pages/Doctor/InPatient/IPDoctorPatientView';

const Layout = () => {
  const { activeMenu } = useStateContext();
  const { accessToken, setAccessToken } = AuthToken();
  if (!accessToken) {
    return <Login setAccessToken={setAccessToken} />;
  }

  return (
    <main>
      <div className='flex relative'>
        {activeMenu
          ? (
            <div className='w-60 fixed'>
              <Sidebar />
            </div>
            )
          : (
            <div>
              <Sidebar />
            </div>
            )}
        <div
          className={
              activeMenu
                ? 'min-h-screen md:ml-60 w-full'
                : 'w-full min-h-screen flex-2'
            }
        >
          <div className="sticky top-0">
            <Topnav />
          </div>
          <div>
            <Toaster position='top-center' richColors />
            <Routes>
              <Route path='/dashboard' element={<Home />} />

              {/* Admin routes */}
              <Route path='/departments' element={<Departments />} />
              <Route path='/updatedepartment/:id' element={<UpdateDepartment />} />
              <Route path='/viewdepartment/:id' element={<ViewDepartment />} />
              <Route path='/schemes' element={<Schemes />} />
              <Route path='/updatescheme/:id' element={<UpdateScheme />} />
              <Route path='/viewscheme/:id' element={<ViewScheme />} />
              <Route path='/employees' element={<Employee />} />
              <Route path='/viewadminemployee/:id' element={<ViewAdminEmployee />} />
              <Route path='/updateadminemployee/:id' element={<UpdateEmployee />} />
              <Route path='/vendors' element={<Vendors />} />
              <Route path='/accounts' element={<Accounts />} />
              <Route path='/hospitaldata' element={<HospitalData />} />
              <Route path='/productpricelist' element={<ProductPriceList />} />
              <Route path='/todolist' element={<ToDoList />} />
              <Route path='/clinic' element={<Clinic />} />
              <Route path='/createclinic' element={<CreateClinic />} />
              <Route path='/viewclinic/:id' element={<ViewClinic />} />
              <Route path='/updateclinic/:id' element={<UpdateClinic />} />
              <Route path='/payments' element={<Payment />} />
              <Route path='/createpayment' element={<CreatePayment />} />
              <Route path='/viewpayment/:id' element={<ViewPayment />} />
              <Route path='/updatepayment/:id' element={<UpdatePayment />} />
              <Route path='/viewbrand/:id' element={<ViewBrand />} />
              <Route path='/updatebrand/:id' element={<UpdateBrand />} />
              <Route path='/updatechronic/:id' element={<UpdateChronic />} />
              <Route path='/viewchronic/:id' element={<ViewChronic />} />
              <Route path='/viewimagetest/:id' element={<ViewImageTest />} />
              <Route path='/updateimagetest/:id' element={<UpdateImageTest />} />
              <Route path='/viewlabtest/:id' element={<ViewLabTest />} />
              <Route path='/updatelabtest/:id' element={<UpdateLabTest />} />
              <Route path='/viewimageclass/:id' element={<ViewImageClass />} />
              <Route path='/updateimageclass/:id' element={<UpdateImageClass />} />
              <Route path='/viewlabclass/:id' element={<ViewLabClass />} />
              <Route path='/updatelabclass/:id' element={<UpdateLabClass />} />
              <Route path='/viewimagerequest/:id' element={<ViewImageRequest />} />
              <Route path='/updateimagerequest/:id' element={<UpdateImageRequest />} />
              <Route path='/viewlabrequest/:id' element={<ViewLabRequest />} />
              <Route path='/updatelabrequest/:id' element={<UpdateLabRequest />} />
              <Route path='/viewphysical/:id' element={<ViewPhysical />} />
              <Route path='/updatephysical/:id' element={<UpdatePhysical />} />
              <Route path='/viewsymptoms/:id' element={<ViewSymptoms />} />
              <Route path='/updatesymptoms/:id' element={<UpdateSymptoms />} />
              <Route path='/viewdrug/:id' element={<ViewDrug />} />
              <Route path='/updatedrug/:id' element={<UpdateDrug />} />
              <Route path='/viewdrugformula/:id' element={<ViewDrugFormula />} />
              <Route path='/updatedrugformula/:id' element={<UpdateDrugFormula />} />

              {/* Doctors routes */}
              <Route path='/OPDashboard' element={<DashBoard />} />
              <Route path='/IPDashboard' element={<DashboardIP />} />
              <Route path='/PatientList' element={<PatientList />} />
              <Route path='/patientinfo' element={<PatientInfo />} />
              <Route path='/patientview' element={<DoctorPatientView />} />
              <Route path='/IPpatientview' element={<IPDoctorsPatientView />} />
              <Route path='/maternity-dashboard' element={<MaternityDashboard />} />
              <Route path='/doctors-daycare' element={<DoctorDaycare />} />
              <Route path='/calculators' element={<Calculators />} />
              <Route path='/patienteducation' element={<PatientEducation />} />
              <Route path='/guidelines' element={<Guidelines />} />

              {/* nurse routes */}
              <Route path='/nurse-opdashboard' element={<NurseOpDashboard />} />
              <Route path='/opnurseorders' element={<OpNurseOrders />} />
              <Route path='/nurse-ipdashboard' element={<NurseIpDashboard />} />
              <Route path='/wardtransfer' element={<WardTransfer />} />
              <Route path='/daycare' element={<DayCare />} />
              <Route path='/nursereports' element={<NurseReports />} />
              <Route path='/viewnursereports/:id' element={<ViewNurseReports />} />
              <Route path ='/nursemain' element={<NurseTemplate />} />
              <Route path='/triage' element={<NurseTriageInfo />} />
              <Route path='/WardTransferform' element={<WardTransferform />} />

              {/* Labaratory routes */}
              <Route path='/phleobotomy' element={<Phleobotomy />} />
              <Route path='/samples' element={<Samples />} />
              <Route path='/storage' element={<Storage />} />
              <Route path='/worklist' element={<WorkList />} />
              <Route path='/labtest' element={<LabTest />} />
              <Route path='/labrequests' element={<LabRequests />} />
              <Route path='/generaterequest' element={<GenerateRequest />} />
              <Route path='/labapprovedrequests' element={<ApprovedLabRequest />} />
              <Route path='/instrumentcalling' element={<InstrumentCalling />} />
              <Route path='/packageshipment' element={<PackageShipment />} />
              <Route path='/orders' element={<Orders />} />
              <Route path='/vieworder/:id' element={<ViewOrder />} />
              <Route path='/reports' element={<Reports />} />
              <Route path='/viewlabreports/:id' element={<ViewLabReport />} />
              <Route path='/addlabresult' element={<AddLabResult />} />
              <Route path='/labmanagement' element={<LabManagement />} />

              {/* Imaging routes */}
              <Route path='/requests' element={<Requests />} />
              <Route path='/patient' element={<Patient />} />
              <Route path='/imagingprocess' element={<ImagingProcess />} />
              <Route path='/imagingreports' element={<ImagingReports />} />
              <Route path='/storemanagement' element={<StoreManagement />} />
              <Route path='/viewstore/:id' element={<ViewStore />} />
              <Route path='/neworder' element={<NewOrder />} />
              <Route path='/imagingform' element={<ImagingForm />} />
              <Route path='/viewimagingpatient/:id' element={<ViewImagingPatient />} />

              {/* Pharmacy routes */}
              <Route path='/opvisit' element={<OpVisit />} />
              <Route path='/pharmacyapproval' element={<PharmacyApproval />} />
              <Route path='/opprescription' element={<OpPrescription />} />
              <Route path='/opprintlabels' element={<OpPrintLabels />} />
              <Route path='/ipmedicineissue' element={<IpMedicineIssue />} />
              <Route path='/ipprintlabels' element={<IpPrintLabels />} />
              <Route path='/ipmedicinerequest' element={<IpMedicineRequest />} />
              <Route path='/processpackage' element={<ProcessPackage />} />
              <Route path='/ipdrugstatement' element={<IpDrugStatement />} />
              <Route path='/amendipprescription' element={<AmendIpPrescription />} />
              <Route path='/dischargemedreturn' element={<DischargeMedReturn />} />
              <Route path='/opdrughistory' element={<OpDrugHistory />} />
              <Route path='/refundpendingdrug' element={<RefundPendingDrug />} />

              <Route path='/walkin-prescription' element={<WalkinPrescription />} />
              <Route path='/op-prescription' element={<OpPrescriptions />} />
              <Route path='/viewopprescription/:id' element={<ViewOpPrescription />} />
              <Route path='/ip-prescription' element={<IpPrescription />} />
              <Route path='/viewipprescription/:id' element={<ViewIpPrescription />} />
              <Route path='/prescriptiondetail/:id' element={<PrescriptionDetail />} />
              <Route path='/pharmacystoremanagemet' element={<PhamarcyStoreManagement />} />
              <Route path='/newrequisition' element={<NewRequisition />} />
              <Route path='/viewrequisition' element={<ViewRequisition />} />
              <Route path='/patientdetails/:id' element={<PatientDetails />} />
              <Route path='/minreorderlevels' element={<MinReorderLevels />} />
              <Route path='/drugexpiryreport' element={<DrugExpiryReport />} />
              <Route path='/ddr-report' element={<DdrReport />} />
              <Route path='/stocktake' element={<StockTake />} />
              <Route path='/stockmovementreport' element={<StockMovementReport />} />
              <Route path='/openingstockentry' element={<OpeningStockEntry />} />
              <Route path='/viewopeningstock/:id' element={<ViewOpeningStock />} />
              <Route path='/closingstockreport' element={<ClosingStockReport />} />
              <Route path='/consumptionreport' element={<ConsumptionReport />} />
              <Route path='/nonmovingstockreport' element={<NonMovingStockReport />} />
              <Route path='/companypricelist' element={<CompanyPriceList />} />
              <Route path='/stockvariancereport' element={<StockVarianceReport />} />

              {/* FrontOffice routes */}
              <Route path='/fo-dashboard' element={<FoDashboard />} />
              <Route path='/listpatients' element={<ListPatients />} />
              <Route path='/addnewpatient' element={<AddPatient />} />
              <Route path='/viewpatient/:id' element={<ViewPatient />} />
              <Route path='/updatepatient/:id' element={<UpdatePatient />} />
              <Route path='/patientregistration' element={<PatientRegistration />} />
              <Route path='/listemergencyvisit' element={<ListEmergencyVisit />} />
              <Route path='/viewemergencyvisit/:id' element={<ViewEmergencyVisit />} />
              <Route path='/updateemergencyvisit/:id' element={<UpdateEmergencyVisit />} />
              <Route path ='/newvisit' element={<NewVisit />} />
              <Route path ='/viewnewvisit/:id' element={<ViewNewVisit />} />
              <Route path ='/updatenewvisit/:id' element={<UpdateNewVisit />} />
              <Route path ='/emergencyvisit' element={<EmergencyVisit />} />
              <Route path="/createvisit/:id" element={<CreatePersonalVisit />} />
              {/* <Route path ='/createPersonalVisit' element={<CreatePersonalVisit />} /> */}
              <Route path ='/appointments' element={<Appointment />} />
            
              {/* Procurement routes */}
              <Route path='/procurementrequests' element={<ProcurementRequest />} />
              <Route path='/viewprocurementrequests/:id' element={<ViewProcurementRequest />} />
              <Route path='/purchaseorder' element={<PurchaseOrder />} />
              <Route path='/viewpurchasedorder/:id' element={<ViewPurchasedOrder />} />
              <Route path='/pastorder' element={<PastOrder />} />
              <Route path='/pricelist' element={<PriceList />} />
              <Route path='/viewpricelist/:id' element={<ViewPriceList />} />
              <Route path='/addnewpricelist' element={<AddNewPriceList />} />
              <Route path='/vendorlist' element={<VendorList />} />
              <Route path='/viewvendorlist/:id' element={<ViewVendorList />} />
              <Route path='/procurementanalysis' element={<ProcumentAnalysis />} />
              <Route path='/addnewproduct' element={<AddNewProduct />} />
              <Route path='/allproducts' element={<AllProducts />} />
              <Route path='/supplier' element={<Supplier />} />
              <Route path='/notes' element={<Notes />} />
              <Route path='/viewgoodsreceivednote/:id' element={<ViewGoodsReceiveNote />} />
              <Route path='/viewgoodsreturnnote/:id' element={<ViewGoodsReturnNote />} />
              <Route path='/generatereceivenote' element={<GenerateReceiveNote />} />
              <Route path='/geberatereturnnote' element={<GenerateReturnNote />} />

              {/* Hr routes */}
              <Route path='/shiftmanagement' element={<ShiftManagement />} />
              <Route path='/viewshift/:id' element={<ViewShift />} />
              <Route path='/updateshift/:id' element={<UpdateShift />} />
              <Route path='/shifts' element={<Shifts />} />
              <Route path='/assignshift' element={<AssignShift />} />
              <Route path='/payroll' element={<Payroll />} />
              <Route path='/addsalary' element={<AddSalary />} />
              <Route path='/leavemanagement' element={<LeaveManagement />} />
              <Route path='/viewleave/:id' element={<ViewLeave />} />
              <Route path='/addleave' element={<AddLeave />} />
              <Route path='/employeemanagement' element={<EmployeeManagement />} />
              <Route path='/addemployee' element={<AddEmployee />} />
              <Route path='/viewemployee/:id' element={<ViewEmployee />} />
              <Route path='/incidentreporting' element={<IncidentReporting />} />
              <Route path='/adavancesalary' element={<AdvanceSalary />} />
              <Route path='/viewadavancesalary/:id' element={<ViewAdvanceSalary />} />
              <Route path='/timeattendance' element={<TimeAttendance />} />
              <Route path='/recruitment' element={<Recruitment />} />
              <Route path='/reportinganalysis' element={<ReportingAnalysis />} />
              <Route path='/memos' element={<Memos />} />
              <Route path='/departmentalheads' element={<DepartmentalHeads />} />

              {/* Inventory routes */}
              <Route path='/procurement' element={<Procurement />} />
              <Route path='/suppliermanagement' element={<SupplierManagement />} />
              <Route path='/procurementanalysis' element={<ProcurementAnalysis />} />
              <Route path='/strategicpurchasing' element={<StrategicPurchasing />} />

              {/* Billing Routes */}
              <Route path='/billing-dashboard' element={<BillingDasboard />} />
              <Route path='/creditpatientbilling' element={<CredirPatientBilling />} />
              <Route path='/receiptdetails/:id' element={<ReceiptDetails />} />
              <Route path='/invoicedetails/:id' element={<InvoiceDetails />} />
              <Route path='/cashbilling' element={<CashBilling />} />
              <Route path='/claimmanagement' element={<ClaimManagement />} />
              <Route path='/generateclaim/:id' element={<GenerateClaim />} />
              <Route path='/inpatientbilling' element={<InpatientBilling />} />
              <Route path='/viewbill/:id' element={<ViewInpatientBill />} />
              <Route path='/addbill' element={<AddBill />} />
              <Route path='/approvaldesk' element={<ApprovalDesk />} />
              <Route path='/viewapproval/:id' element={<ViewApproval />} />
              <Route path='/billingreports' element={<BillingReports />} />
              <Route path='/billquote' element={<BillQuote />} />

              <Route path='/unauthorised' element={<Unauthorised />} />
              <Route path='*' element={<Missing />} />
            </Routes>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Layout;
