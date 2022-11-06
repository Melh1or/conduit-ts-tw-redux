import clsx from "clsx";
import { DateTime } from "luxon";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Author } from "../../api/dto/get-feed.in";

export enum NameStyleEnum {
  LIGHT = "LIGHT",
  GREEN = "GREEN",
}

interface ArticleAuthorProps {
  author: Author;
  publishedAt: string;
  nameStyle?: keyof typeof NameStyleEnum;
}

export const ArticleAuthor: FC<ArticleAuthorProps> = ({
  author,
  publishedAt,
  nameStyle = NameStyleEnum.GREEN,
}) => {
  const usernameClasses = clsx("font-medium", {
    "text-white hover:text-white": nameStyle === NameStyleEnum.LIGHT,
  });

  return (
    <div className="flex">
      <Link to={`/@${encodeURIComponent(author.username)}`}>
        <img
          src={author.image}
          alt={`${author.username} avatar`}
          className="inline-block w-8 h-8 rounded-full"
        />
      </Link>
      <div className="mr-6 ml-0.3 leading-4 inline-flex flex-col">
        <Link
          to={`/@${encodeURIComponent(author.username)}`}
          className={usernameClasses}
        >
          {author.username}
        </Link>
        <span className="text-conduit-gray-500 text-date">
          {DateTime.fromISO(publishedAt).toLocaleString(DateTime.DATETIME_FULL)}
        </span>
      </div>
    </div>
  );
};
