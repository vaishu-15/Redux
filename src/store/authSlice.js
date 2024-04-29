import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({username, password}) => {
    // console.log('username',username);
    // console.log('password',password);
    const response = await fetch('https://api.freeapi.app/api/v1/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await response.json();
    return data;
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
  },
  extraReducers: builder => {
    builder
      .addCase(loginUser.pending, state => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;