// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { initialState } from "@uiw/react-signature";
// import { FetchVisit } from "./visitSlice";

// const initialState = {
//     priceList: [],
//     isLoading: false,
//     error: null,
// }

// export const getPriceList = createAsyncThunk(
//     'bookingSlice/getPriceList',
//     async ({ formData, token }, { rejectWithValue }) => {
//         try {
//             const response = await axios.post('/api/visits/selectPrices', formData, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                     'Content-Type': 'application/json',
//                 },
//             });
//             return response.data;
//         } catch (error) {
//             return rejectWithValue(error.message);
//         }
//     }
// );

// export const createBooking = createAsyncThunk(
//     'bookingSlice/createBooking',
//     async ({ formData, token }, { rejectWithValue }) => {
//         try {
//             const response = await axios.post('/api/visits/create', formData, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                     'Content-Type': 'application/json',
//                 },
//             });
//             toast.success('Booking created successfully');
//             return response.data;
//         } catch (error) {
//             toast.error('Booking NOT created');
//             return rejectWithValue(error.response?.data?.message || 'An error occurred');
//         }
//     }
// );

// const bookingSlice = createSlice({
//     name: 'bookingSlice',
//     initialState: initialState,
//     extraReducers: (builder) => {
//         builder
//             .addCase(getPriceList.pending, (state, action) => {
//                 state.isLoading = true;
//             })
//             .addCase(getPriceList.fulfilled, (state, action) => {
//                 state.priceList = action.payload,
//                     state.isLoading = false;
//             })
//             .addCase(getPriceList.rejected, (state, action) => {
//                 state.isLoading = false;
//                 state.error = action.payload;
//             })
//             .addCase(createBooking.pending, (state, action) => {
//                 state.isLoading = true;
//             })
//             .addCase(createBooking.fulfilled, (state, action) => {
//                 state.priceList.push(action.payload);
//             })
//             .addCase(createBooking.rejected, (state, action) => {
//                 state.error = action.payload;
//             })
//     }
// })

// export default bookingSlice.reducer;