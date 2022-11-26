import { FC } from "react";
import { SignInPage } from "../modules/auth/pages/sign-in.page";
import { SignUpPage } from "../modules/auth/pages/sign-up.page";
import { ArticlePage } from "../modules/feed/pages/article.page";
import { GlobalFeedPage } from "../modules/feed/pages/global-feed.page";
import { ProfilePage } from "../modules/profile/pages/profile.page";

// type Routes = Record<string, { path: string; Element: FC<any> }>;

export const routes = {
  globalFeed: {
    path: "/",
    Element: GlobalFeedPage,
  },
  personalFeed: {
    path: "/personal-feed",
    Element: GlobalFeedPage,
  },
  profile: {
    path: "/@:profile",
    Element: ProfilePage,
  },
  favorites: {
    path: "/@:profile/favorites",
    Element: ProfilePage,
  },
  article: {
    path: "/article/:slug",
    Element: ArticlePage,
  },
  signUp: {
    path: "/sign-up",
    Element: SignUpPage,
  },
  signIn: {
    path: "/sign-in",
    Element: SignInPage,
  },
} as const
