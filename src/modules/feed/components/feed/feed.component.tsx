import { FC, useState } from "react";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";

import { Container } from "../../../../common/components/container/container.component";
import { useGetGlobalFeedQuery } from "../../api/repository";
import { ArticleList } from "../article-list/article-list.component";
import { FeedToggle } from "../feed-toggle/feed-toggle.component";
import { FEED_PAGE_SIZE } from "../../consts";
import { serializeSearchParams } from "../../../../utils/router";
import { TagCloud } from "../tag-cloud/tag-cloud.component";

interface FeedProps {}

export const Feed: FC<FeedProps> = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(
    searchParams.get("page") ? Number(searchParams.get("page")) : 0
  );
  const { data, isLoading, error, isFetching } = useGetGlobalFeedQuery({
    page,
    tag: searchParams.get("tag"),
  });

  const handlePageChange = ({ selected }: { selected: number }) => {
    setPage(selected);
    setSearchParams(serializeSearchParams({ page: String(selected) }));
  };

  if (isLoading || isFetching) return <Container>Feed loading... </Container>;

  if (error) return <Container>Error while loading... </Container>;

  return (
    <Container>
      <FeedToggle />
      <div className="flex">
        <div className="w-3/4">
          <ArticleList list={data?.articles ?? []} />
          <nav className="my-6">
            <ReactPaginate
              previousLabel={null}
              nextLabel={null}
              pageCount={(data?.articlesCount || 0) / FEED_PAGE_SIZE}
              pageRangeDisplayed={(data?.articlesCount || 0) / FEED_PAGE_SIZE}
              containerClassName="flex"
              pageClassName="group"
              activeClassName="active group"
              activeLinkClassName="group-[.active]:bg-conduit-green group-[.active]:text-white group-[.active]:border-conduit-green"
              pageLinkClassName="p-3 text-conduit-green bg-white border border-conduit-gray-400 -ml-px group-[&:nth-child(2)]:rounded-l group-[&:nth-last-child(2)]:rounded-r hover:bg-conduit-gray-200"
              onPageChange={handlePageChange}
              forcePage={page}
            />
          </nav>
        </div>
        <div className="w-1/4 pl-3">
          <TagCloud />
        </div>
      </div>
    </Container>
  );
};
