import { DateTime } from "luxon";
import { FC } from "react";
import { Link } from "react-router-dom";
import { FeedArticle } from "../../api/dto/get-feed.in";
import { ArticleAuthor } from "../article-author/article-author.component";
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
  slug,
  favorited
}) => {
  return (
    <article>
      <div className="py-6 border-t border-black/10">
        <div className="flex justify-between mb-4 font-light">
          <ArticleAuthor author={author} publishedAt={createdAt} />
          <FavoriteButton
            count={favoritesCount}
            slug={slug}
            isFavorited={favorited}
          />
        </div>
        <Link to={`/article/${slug}`} className="hover:no-underline">
          <h1 className="mb-1 text-2xl font-semibold text-conduit-gray-1000">
            {title}
          </h1>
          <p className="mb-1 font-light text-conduit-gray-600">{description}</p>
        </Link>
        <div className="flex justify-between">
          <span className="font-light text-conduit-gray-500 text-date">
            Read more...
          </span>
          <TagList list={tagList} />
        </div>
      </div>
    </article>
  );
};
