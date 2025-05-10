import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/api"; // Update path if different

export const listBills = createAsyncThunk(
  "bills/listBills",
  async ({ payload, token }, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/bills/get", {
        params: payload, // correct way to send query params in GET
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

export const clearBill = createAsyncThunk(
  "bills/clearBill",
  async ({ payload, token }, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/payments/cash/clear", payload, {
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

// Initial state
const initialState = {
  bills: null,
  currentPage: 1,
  lastPage: 1,
  total: 0,
  loading: false,
  error: null,
  success: false,
};

const billingSlice = createSlice({
  name: "bills",
  initialState,
  reducers: {
    resetClearBillState: (state) => {
      state.success = false;
      state.error = null;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(clearBill.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(clearBill.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(clearBill.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      })
      .addCase(listBills.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(listBills.fulfilled, (state, action) => {
        state.loading = false;
        state.bills = action.payload;
        state.currentPage = action.payload.current_page;
        state.lastPage = action.payload.last_page;
        state.total = action.payload.total;
      })
      .addCase(listBills.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetClearBillState, setCurrentPage } = billingSlice.actions;

export default billingSlice.reducer;