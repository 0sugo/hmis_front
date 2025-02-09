import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../api/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
    services: [],
    isLoading: false,
    error: null,
};

export const fetchServices = createAsyncThunk(
    'services/fetchServices',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('/api/services');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const createService = createAsyncThunk(
    'services/createService',
    async ({ formData, token }, { rejectWithValue }) => {
        try {
            const response = await axios.post('/api/services/create', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            toast.success('Service created successfully');
            return response.data;
        } catch (error) {
            toast.error('Service NOT created');
            return rejectWithValue(error.response?.data?.message || 'An error occurred');
        }
    }
);


const serviceSlice = createSlice({
    name: 'services',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchServices.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchServices.fulfilled, (state, action) => {
                state.services = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchServices.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(createService.fulfilled, (state, action) => {
                state.services.push(action.payload);
            })
            .addCase(createService.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(createService.pending, (state) => {
                state.isLoading = true;
            });
    }
});

export default serviceSlice.reducer;