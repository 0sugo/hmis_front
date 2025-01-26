import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../api/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
    patient: {},
    isLoading: false,
    error: null,
};

export const createPatient = createAsyncThunk(
    '/patients/create',
    async ({ formData, token }, { rejectWithValue }) => {
        try {
            const formDataToSubmit = new FormData();

            const dataObject = {
                firstname: formData.firstname || null,
                lastname: formData.lastname || null,
                phonenumber1: formData.phonenumber1 || null,
                phonenumber2: formData.phonenumber2 || null,
                email: formData.email || null,
                dob: formData.dob || null,
                identification_type: formData.identification_type || null,
                id_no: formData.id_no || null,
                address: formData.address || null,
                residence: formData.residence || null,
                insurance_membership: formData.insuarance_membership || null,
                next_of_kin_name: formData.next_of_kin_name || null,
                next_of_kin_contact: formData.next_of_kin_contact || null,
                next_of_kin_relationship: formData.next_of_kin_relationship || null,
                insurance_details: formData.insurance_details.map((insurance) => ({
                    insurer: insurance.insurer || null,
                    scheme_type: insurance.scheme_type || null,
                    insurer_contact: insurance.insurer_contact || null,
                    principal_member_name: insurance.principal_member_name || null,
                    principal_member_number: insurance.principal_member_number || null,
                    member_validity: insurance.member_validity || null,
                })),
                payment_methods: [
                    {
                        cash: formData.payment_methods.cash ? 1 : 0,
                        insurance: formData.payment_methods.insurance ? 1 : 0,
                    },
                ],
            };

            // Append data object to FormData
            formDataToSubmit.append('data', JSON.stringify(dataObject));

            // Append files separately
            if (formData.id_card_image instanceof File) {
                formDataToSubmit.append('id_card_image', formData.id_card_image);
            }

            formData.insurance_details.forEach((insurance) => {
                if (insurance.insurance_card_image instanceof File) {
                    formDataToSubmit.append('insurance_card_image', insurance.insurance_card_image);
                }
            });

            const response = await axios.post('/api/patients/create', formDataToSubmit, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });

            toast.success('Patient created successfully');
            localStorage.removeItem('patientFormData');
            return response.data;
        } catch (error) {
            toast.error('Patient NOT created');
            return rejectWithValue(error.response?.data?.message || 'An error occurred');
        }
    }
);

export const deepSearch = createAsyncThunk(
    '/patients/deepSearch',
    async ({ search, token }, { rejectWithValue }) => {
        try {
            const response = await axios.get(`/api/patients/search/${search}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'An error occurred');
        }
    }
);

export const getIndividualPatient = createAsyncThunk(
    '/patients/deepSearch',
    async ({ search, token }, { rejectWithValue }) => {
        try {
            const response = await axios.get(`/api/patients/get?id=${search}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'An error occurred');
        }
    }
);

const patientSlice = createSlice({
    name: 'patients',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(createPatient.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(createPatient.fulfilled, (state, action) => {
                state.patient = action.payload;
                state.isLoading = false;
            })
            .addCase(createPatient.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || 'An error occurred';
            })
            .addCase(deepSearch.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(deepSearch.fulfilled, (state, action) => {
                state.patient = action.payload;
                state.isLoading = false;
            })
            .addCase(deepSearch.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || 'An error occurred';
            });
    },
});

export default patientSlice.reducer;