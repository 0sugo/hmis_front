import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../api/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const getUniversalStage = createAsyncThunk(
  "/stages/universalStage",
  async ({ page = 1, token, stage }, { rejectWithValue }) => {
    try {
      const body = stage ? { stage } : {};
      const response = await axios.post(`/api/patients/service/billed`,
         body ,
        {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "An error occurred"
      );
    }
  }
);

const universalStageSlice = createSlice({
  name: "universalStage",
  initialState: {
    universalStage: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUniversalStage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUniversalStage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.universalStage = action.payload;
      })
      .addCase(getUniversalStage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default universalStageSlice.reducer;
