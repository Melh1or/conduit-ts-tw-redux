import { FC } from "react";
import { useMatch, useSearchParams } from "react-router-dom";

import { Banner } from "../../../common/components/banner/banner.component";
import { Container } from "../../../common/components/container/container.component";
import { routes } from "../../../core/routes";
import { useAuth } from "../../auth/hooks/use-auth";
import { useGetGlobalFeedQuery } from "../api/repository";
import { FeedToggle } from "../components/feed-toggle/feed-toggle.component";
import { Feed } from "../components/feed/feed.component";
import { TagCloud } from "../components/tag-cloud/tag-cloud.component";
import { usePageParam } from "../hooks/use-page-param.hook";

interface GlobalFeedPageProps {}

export const GlobalFeedPage: FC<GlobalFeedPageProps> = () => {
  const { isLoggedIn } = useAuth();
  const [searchParams] = useSearchParams();
  const { page } = usePageParam();
  const personalFeed = useMatch(routes.personalFeed.path);

  console.log({
    page,
    isPersonalFeed: personalFeed !== null,
    tag: searchParams.get("tag"),
  });

  const { data, isLoading, error, isFetching } = useGetGlobalFeedQuery({
    page,
    isPersonalFeed: personalFeed !== null,
    tag: searchParams.get("tag"),
  });

  const feedToggleItems = [];
  if (isLoggedIn) {
    feedToggleItems.push({
      text: "Your feed",
      link: "/personal-feed",
    });
  }

  return (
    <>
      {!isLoggedIn && <Banner />}
      <Container>
        <FeedToggle items={feedToggleItems} />

        <div className="flex">
          <div className="w-3/4">
            <Feed
              data={data}
              error={error}
              isLoading={isLoading}
              isFetching={isFetching}
            />
          </div>
          <div className="w-1/4 pl-3">
            <TagCloud />
          </div>
        </div>
      </Container>
    </>
  );
};
