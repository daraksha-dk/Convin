import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import mainService from "../services/mainService";

const initialState = {
  users: {
    data: [],
    loading: false,
    error: null,
  },
  selectedUser: {
    data: {},
    loading: false,
    error: null,
  },
};

const getUsers = createAsyncThunk("main/getUsers", async () => {
  try {
    const res = await mainService.getUsers();
    console.log({ res });
    return res.data.data;
  } catch (error) {
    return initialState;
  }
});

const setProfile = createAsyncThunk("main/getUserById", async (id) => {
  try {
    const res = await mainService.getUserById(id);
    console.log({ res });
    return res.data.data;
  } catch (error) {
    return initialState;
  }
});

const MainReducer = createSlice({
  name: "main",
  initialState,
  reducers: {},
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.users.loading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.users.loading = false;
      state.users.data = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      state.users.loading = false;
      state.users.error = "Something went wrong";
    },
    [setProfile.pending]: (state) => {
      state.selectedUser.loading = true;
    },
    [setProfile.fulfilled]: (state, action) => {
      state.selectedUser.loading = false;
      state.selectedUser.data = action.payload;
    },
  },
});

export const mainActions = { ...MainReducer.actions, getUsers, setProfile };

const selectMain = (state) => state.main;

export const selectUsers = createSelector([selectMain], (main) => main.users);

export const selectSelectedUser = createSelector(
  [selectMain],
  (main) => main.selectedUser
);

export default MainReducer.reducer;
