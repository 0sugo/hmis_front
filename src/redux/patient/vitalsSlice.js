import { createAsyncThunk, createSlice, isRejectedWithValue } from '@reduxjs/toolkit';
import axios from '../../api/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
    vitals: {},
    isLoading: false,
    error: null,
};

export const createVitals = createAsyncThunk(
    'vitals/create',
    async (formData, { rejectWithValue }) => {
        try {
        const response = await axios.post('/api/vitals/create', formData);
        toast.success("Vitals created successfully!");
        return response.data;
      } catch (error) {
        toast.error("Failed to create vitals.");
        return rejectWithValue(error.response?.data || "Something went wrong");
      }
    }
  );

const vitalSlice = createSlice({
    name:'vitals',
    initialState,
    extraReducers:(builder) => {
        builder
        .addCase(createVitals.pending,(state)=> {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(createVitals.fulfilled,(state,action)=>{
            state.vitals = action.payload;
            state.isLoading=false;
        })
        .addCase(createVitals.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.payload
        })
    }
});

export default vitalSlice.reducer