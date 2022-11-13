import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../store/store";
import { SignUpInDto } from "../api/dto/sign-up.in.dto";

interface AuthState {
  user: SignUpInDto["user"] | null;
}

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<SignUpInDto["user"] | null>) => {
      state.user = action.payload;
    },
  },
});

export const selectUser = (state: RootState) => state.auth.user;

export const { setUser } = authSlice.actions;
