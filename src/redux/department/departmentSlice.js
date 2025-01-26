import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../api/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
    departments: [],
    isLoading: false,
    error: null,
};

export const fetchDepartments = createAsyncThunk(
    'departments/fetchDepartments',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('/api/departments');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const createDepartment = createAsyncThunk(
    'departments/createDepartment',
    async ({ formData, token }, { rejectWithValue }) => {
        try {
            const response = await axios.post('/api/departments/create', formData, {
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

const departmentSlice = createSlice({
    name: 'departments',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchDepartments.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchDepartments.fulfilled, (state, action) => {
                state.departments = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchDepartments.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(createDepartment.fulfilled, (state, action) => {
                state.departments.push(action.payload);
            })
            .addCase(createDepartment.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(createDepartment.pending, (state) => {
                state.isLoading = true;
            });

    }
});

export default departmentSlice.reducer;