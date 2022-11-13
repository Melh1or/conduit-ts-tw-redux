import { createApi } from "@reduxjs/toolkit/query/react";
import { realWorldBaseQuery } from "../../../core/api/realworld-base-query";
import { SignUpOutDto } from "./dto/sign-up.out.dto";
import { SignUpInDto } from "./dto/sign-up.in.dto";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: realWorldBaseQuery,
  endpoints: (builder) => ({
    signUp: builder.query<SignUpInDto, SignUpOutDto["user"]>({
      query: (user) => ({
        url: "/users",
        method: "POST",
        data: { user },
      }),
    }),
  }),
});

export const { useLazySignUpQuery } = authApi;
