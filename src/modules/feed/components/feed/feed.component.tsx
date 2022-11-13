import { FC } from "react";
import ReactPaginate from "react-paginate";

import { FeedData } from "../../api/repository";
import { FEED_PAGE_SIZE } from "../../consts";
import { usePageParam } from "../../hooks/use-page-param.hook";
import { ArticleList } from "../article-list/article-list.component";

interface FeedProps {
  isLoading: boolean;
  isFetching: boolean;
  error: any;
  data?: FeedData;
}

export const Feed: FC<FeedProps> = ({ data, error, isFetching, isLoading }) => {
  const { page, setPage } = usePageParam();

  const handlePageChange = ({ selected }: { selected: number }) => {
    setPage(selected);
  };

  if (isLoading || isFetching) return <p className="mt-4">Feed loading... </p>;

  if (error) return <p className="mt-4">Error while loading... </p>;

  if (data?.articlesCount === 0) return <p className="mt-4">No articles yet</p>;

  return (
    <>
      <ArticleList list={data?.articles ?? []} />
      <nav className="my-6">
        <ReactPaginate
          previousLabel={null}
          nextLabel={null}
          pageCount={Math.ceil((data?.articlesCount || 0) / FEED_PAGE_SIZE)}
          pageRangeDisplayed={Math.ceil(
            (data?.articlesCount || 0) / FEED_PAGE_SIZE
          )}
          containerClassName="flex"
          pageClassName="group"
          activeClassName="active group"
          activeLinkClassName="group-[.active]:bg-conduit-green group-[.active]:text-white group-[.active]:border-conduit-green"
          pageLinkClassName="p-3 text-conduit-green bg-white border border-conduit-gray-400 -ml-px group-[&:nth-child(2)]:rounded-l group-[&:nth-last-child(2)]:rounded-r hover:bg-conduit-gray-200"
          onPageChange={handlePageChange}
          forcePage={page}
        />
      </nav>
    </>
  );
};
