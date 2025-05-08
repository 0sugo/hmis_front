import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../api/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const intialState = {
    AllVisits: [],
    isLoading: false,
    error: null,

}

export const FetchVisit = createAsyncThunk('fetch/visits', async (_, { rejectWithValue }) => {
    try {
        const response = await axios(`api/visits/create`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || 'Failed to fetch visits');
    }
});

export const createVisit = createAsyncThunk(
    'visits/create',
    async ({ formData, token }, { rejectWithValue }) => {
        try {
            const response = await axios.post(`api/visits/create`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'An error occurred');
        }
    });

const VisitSlice = createSlice({
    name: 'visits',
    initialState: intialState,
    extraReducers: (builder) => {
        builder
            .addCase(FetchVisit.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(FetchVisit.fulfilled, (state, action) => {
                state.AllVisits = action.payload;
                state.isLoading = false;
            })
            .addCase(FetchVisit.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || 'An error occurred';
            })
            .addCase(createVisit.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(createVisit.fulfilled, (state, action) => {
                state.AllVisits = action.payload;
                state.isLoading = false;
            })
            .addCase(createVisit.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || 'An error occurred while creating the visit';
            });
    }

});

export default VisitSlice.reducer;