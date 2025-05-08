import { configureStore } from '@reduxjs/toolkit';
import visitReducer from './visit/visitSlice';
import schemeReducer from './scheme/schemeSlice';
import patientReducer from './patient/patientSlice';
import departmentReducer from './department/departmentSlice';
import clinicReducer from './clinic/clinicSlice';
import visitTypesReducer from './visit/visitTypesSlice';
import bookingReducer from './visit/bookingSlice';
import serviceReducer from './service/serviceSlice';
import universalStageReducer from '../redux/universal Slice/UniversalStageSlice';
import vitalReducer from '../redux/patient/vitalsSlice';

const store = configureStore({
  reducer: {
    // bookings:bookingReducer,
    visits:visitReducer,
    visitTypes:visitTypesReducer,
    schemes:schemeReducer,
    patient:patientReducer,
    departments:departmentReducer,
    clinics:clinicReducer,
    services:serviceReducer,
    universalStage:universalStageReducer,
    vitals:vitalReducer

  },
});

export default store;
