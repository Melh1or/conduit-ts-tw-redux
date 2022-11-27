import { createApi } from "@reduxjs/toolkit/query/react";
import { realWorldBaseQuery } from "../../../core/api/realworld-base-query";
import { FEED_PAGE_SIZE } from "../consts";
import { ArticleCommentsInDTO } from "./dto/article-comments.in";
import { FavoriteArticleInDTO } from "./dto/favorite-article.in";
import { FeedArticle } from "./dto/get-feed.in";
import { PopularTagsInDTO } from "./dto/popular-tags.in";
import { SingleArticleInDTO } from "./dto/single-article.in";
import { replaceCachedArticle, transformResponse } from "./utils";

interface BaseFeedParams {
  page: number;
}

export interface GlobalFeedParams extends BaseFeedParams {
  tag: string | null;
  isPersonalFeed: boolean;
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

export interface FavoriteArticleParams {
  slug: string;
}

export const feedApi = createApi({
  reducerPath: "feedApi",
  tagTypes: ["Article"],
  baseQuery: realWorldBaseQuery,
  endpoints: (builder) => ({
    getGlobalFeed: builder.query<FeedData, GlobalFeedParams>({
      query: ({ page, tag, isPersonalFeed }) => ({
        url: isPersonalFeed ? "/articles/feed" : "/articles",
        params: {
          limit: FEED_PAGE_SIZE,
          offset: page * FEED_PAGE_SIZE,
          tag,
        },
      }),
      transformResponse,
      providesTags: (result) =>
        result
          ? result.articles.map((article) => ({
              type: "Article",
              slug: article.slug,
            }))
          : ["Article"],
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
    getCommentsForArticle: builder.query<
      ArticleCommentsInDTO,
      SingleArticleParams
    >({
      query: ({ slug }) => ({
        url: `/articles/${slug}/comments`,
      }),
    }),
    favoriteArticle: builder.mutation<
      FavoriteArticleInDTO,
      FavoriteArticleParams
    >({
      query: ({ slug }) => ({
        url: `/articles/${slug}/favorite`,
        method: "POST",
      }),
      async onQueryStarted({}, { dispatch, queryFulfilled, getState }) {
        await replaceCachedArticle(getState, queryFulfilled, dispatch, feedApi);
      },
    }),
    unfavoriteArticle: builder.mutation<
      FavoriteArticleInDTO,
      FavoriteArticleParams
    >({
      query: ({ slug }) => ({
        url: `/articles/${slug}/favorite`,
        method: "DELETE",
      }),
      async onQueryStarted({}, { dispatch, queryFulfilled, getState }) {
        await replaceCachedArticle(getState, queryFulfilled, dispatch, feedApi);
      },
    }),
  }),
});

export const {
  useGetGlobalFeedQuery,
  useGetPopularTagsQuery,
  useGetProfileFeedQuery,
  useGetSingleArticleQuery,
  useGetCommentsForArticleQuery,
  useFavoriteArticleMutation,
  useUnfavoriteArticleMutation,
} = feedApi;
