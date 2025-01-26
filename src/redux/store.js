import { configureStore } from '@reduxjs/toolkit';
import visitReducer from './visit/visitSlice';
import schemeReducer from './scheme/schemeSlice';
import patientReducer from './patient/patientSlice';
import departmentReducer from './department/departmentSlice';
import clinicReducer from './clinic/clinicSlice';
import visitTypesReducer from './visit/visitTypesSlice';

const store = configureStore({
  reducer: {
    visits:visitReducer,
    visitTypes:visitTypesReducer,
    schemes:schemeReducer,
    patient:patientReducer,
    departments:departmentReducer,
    clinics:clinicReducer,
  },
});

export default store;
