import { ComponentProps, FC } from "react";
import { FollowButton } from "../../../profile/components/follow-button/follow-button.component";
import { Author } from "../../api/dto/get-feed.in";
import {
  ArticleAuthor,
  NameStyleEnum,
} from "../article-author/article-author.component";
import { FavoriteButton } from "../favorite-button/favorite-button.component";

interface ArticleMetaProps {
  authorNameStyle?: ComponentProps<typeof ArticleAuthor>["nameStyle"];
  authorDirection?: ComponentProps<typeof ArticleAuthor>["direction"];
  authorNameSize?: ComponentProps<typeof ArticleAuthor>["nameSize"];
  author: Author;
  likes?: number;
  publishedAt: string;
  showActionsButtons?: boolean;
}

export const ArticleMeta: FC<ArticleMetaProps> = ({
  author,
  authorNameStyle = "LIGHT",
  likes,
  publishedAt,
  showActionsButtons = true,
  authorDirection,
  authorNameSize,
}) => {
  return (
    <div>
      <div className="inline-block">
        <ArticleAuthor
          author={author}
          publishedAt={publishedAt}
          nameStyle={authorNameStyle}
          direction={authorDirection}
          nameSize={authorNameSize}
        />
      </div>
      {showActionsButtons && (
        <div className="inline-flex gap-4">
          <FollowButton username={author.username} btnStyle="LIGHT" />
          <FavoriteButton count={likes ?? 0} extended />
        </div>
      )}
    </div>
  );
};
