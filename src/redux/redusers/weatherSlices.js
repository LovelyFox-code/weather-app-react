import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//action
export const fetchWeatherAction = createAsyncThunk(
  "weather/fetch",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`
      );
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);
//reducer

const weatherSlice = createSlice({
  name: "weather",
  initialState: {},
  extraReducers: (builder) => {
    //pending
    builder.addCase(fetchWeatherAction.pending, (state, action) => {
      state.loading = true;
    });
    //fulfield
    builder.addCase(fetchWeatherAction.fulfilled, (state, action) => {
      state.weather = action && action.payload;
      state.loading = false;
      state.error = undefined;
    });
    //rejected
    builder.addCase(fetchWeatherAction.rejected, (state, action) => {
      state.loading = false;
      state.weather = undefined;
      state.error = action && action.payload;
    });
  },
});

export default weatherSlice.reducer;
