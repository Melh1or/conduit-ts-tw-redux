import { DateTime } from "luxon";
import { FC } from "react";
import { Link } from "react-router-dom";
import { FeedArticle } from "../../api/dto/get-feed.in";
import { FavoriteButton } from "../favorite-button/favorite-button.component";
import { TagList } from "../tag-list/tag-list.component";

interface ArticleProps extends FeedArticle {}

export const Article: FC<ArticleProps> = ({
  author,
  createdAt,
  favoritesCount,
  title,
  description,
  tagList,
}) => {
  return (
    <article>
      <div className="py-6 border-t border-black/10">
        <div className="flex justify-between mb-4 font-light">
          <div className="flex">
            <Link to={`/@${author.image}`}>
              <img
                src={author.image}
                alt={`${author.username} avatar`}
                className="inline-block w-8 h-8 rounded-full"
              />
            </Link>
            <div className="mr-6 ml-0.3 leading-4 inline-flex flex-col">
              <Link to={`/@${author.image}`} className="font-medium">
                {author.username}
              </Link>
              <span className="text-conduit-gray text-date">
                {DateTime.fromISO(createdAt).toLocaleString(DateTime.DATETIME_FULL)}
              </span>
            </div>
          </div>
          <FavoriteButton count={favoritesCount} />
        </div>
        <Link to="/article/" className="hover:no-underline">
          <h1 className="mb-1 text-2xl font-semibold text-conduit-darkestGray">
            {title}
          </h1>
          <p className="mb-1 font-light text-conduit-darkenGray">
            {description}
          </p>
        </Link>
        <div className="flex justify-between">
          <span className="font-light text-conduit-gray text-date">
            Read more...
          </span>
          <TagList list={tagList} />
        </div>
      </div>
    </article>
  );
};
