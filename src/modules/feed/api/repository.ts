import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GlobalFeed } from "./dto/get-feed.in";

export const feedApi = createApi({
  reducerPath: "feedApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://conduit.productionready.io/api",
  }),
  endpoints: (builder) => ({
    getGlobalFeed: builder.query<GlobalFeed, {}>({
      query: () => ({
        url: "/articles",
        method: "get",
      }),
    }),
  }),
});

export const { useGetGlobalFeedQuery } = feedApi;
