import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/api';

export const submitConsultation = createAsyncThunk(
  'consultation/submitConsultation',
  async ( data , { rejectWithValue }) => {
    try {
      const response = await axios.post(`/api/doctor/consultations/create`, data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const consultationSlice = createSlice({
  name: 'consultation',
  initialState: {
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    resetConsultationState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitConsultation.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(submitConsultation.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(submitConsultation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { resetConsultationState } = consultationSlice.actions;
export default consultationSlice.reducer;
