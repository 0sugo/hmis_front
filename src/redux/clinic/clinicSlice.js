import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../api/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
    clinics: [],
    isLoading: false,
    error: null
};

export const fetchClinics = createAsyncThunk(
    'clinics/fetchClinics',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('/api/clinics');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const createDepartment = createAsyncThunk(
    'clinics/createClinics',
    async ({ formData, token }, { rejectWithValue }) => {
        try {
            const response = await axios.post('/api/clinics/create', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            toast.success('Department created successfully');
            return response.data;
        } catch (error) {
            toast.error('Department NOT created');
            return rejectWithValue(error.response?.data?.message || 'An error occurred');
        }
    }
);

const clinicSlice = createSlice({
    name:'clinics',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchClinics.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchClinics.fulfilled, (state, action) => {
                state.clinics = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchClinics.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(createDepartment.fulfilled, (state, action) => {
                state.clinics.push(action.payload);
            })
            .addCase(createDepartment.rejected, (state, action) => {
                state.error = action.payload;
            })
    }
})

export default clinicSlice.reducer;