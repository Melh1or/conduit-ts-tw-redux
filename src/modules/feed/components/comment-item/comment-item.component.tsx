import { FC } from "react";
import { Comment } from "../../api/dto/article-comments.in";
import { ArticleMeta } from "../article-meta/article-meta.component";

export interface CommentItemProps extends Comment {
  slug: string;
  isFavorited: boolean
}

export const CommentItem: FC<CommentItemProps> = ({
  body,
  author,
  createdAt,
  slug,
  isFavorited,
}) => {
  return (
    <div className="border rounded border-conduit-gray-250">
      <div className="p-5">
        <p>{body}</p>
      </div>
      <div className="px-5 py-3 border-t border-conduit-gray-250 bg-conduit-gray-150">
        <ArticleMeta
          isFavorited={isFavorited}
          authorNameStyle="GREEN"
          author={author}
          publishedAt={createdAt}
          showActionsButtons={false}
          authorDirection="ROW"
          authorNameSize="SM"
          slug={slug}
        />
      </div>
    </div>
  );
};
