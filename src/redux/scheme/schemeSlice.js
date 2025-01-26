import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../api/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
    schemes: [],
    isLoading: false,
    error: null,
};

export const fetchSchemes = createAsyncThunk(
    'schemes/fetchSchemes',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('/api/schemes');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const createScheme = createAsyncThunk(
    'schemes/createScheme',
    async ({ formData, token }, { rejectWithValue }) => {
        try {
            const response = await axios.post('/api/schemes/create', formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            toast.success('Scheme created successfully');
            return response.data;
        } catch (error) {
            toast.error('Scheme NOT created');
            return rejectWithValue(error.response?.data?.message || 'An error occurred');
        }
    }
);

const schemeSlice = createSlice({
    name: 'schemes',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchSchemes.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchSchemes.fulfilled, (state, action) => {
                state.schemes = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchSchemes.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            // Add cases for createScheme if needed, like:
            .addCase(createScheme.fulfilled, (state, action) => {
                state.schemes.push(action.payload);
                state.isLoading = false;
            })
            .addCase(createScheme.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export default schemeSlice.reducer;