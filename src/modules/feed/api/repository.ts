import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../../core/axios-base-query";
import { FEED_PAGE_SIZE } from "../consts";
import { FeedArticle, GlobalFeedInDTO } from "./dto/get-feed.in";
import { PopularTagsInDTO } from "./dto/popular-tags.in";

interface GlobalFeedParams {
  page: number;
  tag: string | null;
}

export interface FeedData {
  articles: FeedArticle[];
  articlesCount: number;
}

export const feedApi = createApi({
  reducerPath: "feedApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://conduit.productionready.io/api",
  }),
  endpoints: (builder) => ({
    getGlobalFeed: builder.query<FeedData, GlobalFeedParams>({
      query: ({ page, tag }) => ({
        url: "/articles",
        params: {
          limit: FEED_PAGE_SIZE,
          offset: page * FEED_PAGE_SIZE,
          tag,
        },
      }),
      transformResponse: (response: GlobalFeedInDTO) => {
        return {
          articles: response.articles || [],
          articlesCount: response.articlesCount || 0,
        };
      },
    }),
    getPopularTags: builder.query<PopularTagsInDTO, {}>({
      query: () => ({
        url: "/tags",
      }),
    }),
  }),
});

export const { useGetGlobalFeedQuery, useGetPopularTagsQuery } = feedApi;
