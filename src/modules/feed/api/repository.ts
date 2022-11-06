import { createApi } from "@reduxjs/toolkit/query/react";
import { realWorldBaseQuery } from "../../../core/api/realworld-base-query";
import { FEED_PAGE_SIZE } from "../consts";
import { FeedArticle } from "./dto/get-feed.in";
import { PopularTagsInDTO } from "./dto/popular-tags.in";
import { SingleArticleInDTO } from "./dto/single-article.in";
import { transformResponse } from "./utils";

interface BaseFeedParams {
  page: number;
}

interface GlobalFeedParams extends BaseFeedParams {
  tag: string | null;
}

interface ProfileFeedParams extends BaseFeedParams {
  author: string;
  isFavorite?: boolean;
}

export interface FeedData {
  articles: FeedArticle[];
  articlesCount: number;
}

export interface SingleArticleParams {
  slug: string;
}

export const feedApi = createApi({
  reducerPath: "feedApi",
  baseQuery: realWorldBaseQuery,
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
      transformResponse,
    }),
    getProfileFeed: builder.query<FeedData, ProfileFeedParams>({
      query: ({ page, author, isFavorite }) => ({
        url: "/articles",
        params: {
          limit: FEED_PAGE_SIZE,
          offset: page * FEED_PAGE_SIZE,
          author: isFavorite ? undefined : author,
          favorited: isFavorite ? author : undefined,
        },
      }),
      transformResponse,
    }),
    getPopularTags: builder.query<PopularTagsInDTO, {}>({
      query: () => ({
        url: "/tags",
      }),
    }),
    getSingleArticle: builder.query<SingleArticleInDTO, SingleArticleParams>({
      query: ({ slug }) => ({
        url: `/articles/${slug}`,
      }),
    }),
  }),
});

export const {
  useGetGlobalFeedQuery,
  useGetPopularTagsQuery,
  useGetProfileFeedQuery,
  useGetSingleArticleQuery,
} = feedApi;
