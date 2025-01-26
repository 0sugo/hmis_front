import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../api/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
    visitTypes: [],
    isLoading: false,
    error: null,
};

export const fetchVisitTypes = createAsyncThunk(
    'visitTypes/fetchVisitTypes',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('/api/visitTypes');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const createVisitType = createAsyncThunk(
    'visitTypes/createVisitType',
    async ({ formData, token }, { rejectWithValue }) => {
        try {
            const response = await axios.post('/api/visit-types/create', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            toast.success('Visit Type created successfully');
            return response.data;
        } catch (error) {
            toast.error('Visit Type NOT created');
            return rejectWithValue(error.response?.data?.message || 'An error occurred');
        }
    }
);


const visitTypesSlice = createSlice({
    name: 'visitTypes',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchVisitTypes.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchVisitTypes.fulfilled, (state, action) => {
                state.visitTypes = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchVisitTypes.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(createVisitType.fulfilled, (state, action) => {
                state.visitTypes.push(action.payload);
            });
    }
});

export default visitTypesSlice.reducer;