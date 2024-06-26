// import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

// export const loginUser = createAsyncThunk(
//   'auth/loginUser',
//   async ({username, password}) => {
//     const response = await fetch('https://dummyjson.com/auth/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         username,
//         password,
//       }),
//     });
//     const data = await response.json();
//     return data;
//   },
// );

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     value: 0,
//     user: null,
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     increment: (state) => {
//       state.value += 1
//     },
//     decrement: (state) => {
//       state.value -= 1
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload
//     },
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(loginUser.pending, state => {
//         state.loading = true;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload;
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export const { increment ,decrement} = authSlice.actions;
// export default authSlice.reducer;