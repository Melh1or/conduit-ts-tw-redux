import { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetCommentsForArticleQuery } from "../../api/repository";
import { CommentItem } from "../comment-item/comment-item.component";

interface CommentsListProps {}

export const CommentsList: FC<CommentsListProps> = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data, isLoading } = useGetCommentsForArticleQuery({ slug: slug! });

  if (isLoading) {
    return <p>Loading comments</p>;
  }

  if (!data?.comments) {
    return (
      <div className="flex flex-col max-w-3xl gap-3 mx-auto mt-16">
        <p>
          <Link to="/sign-in">Sign in</Link> or{" "}
          <Link to="/sing-up">sign up</Link> to add comments on this article.
        </p>
        <p>Not comments found</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col max-w-3xl gap-3 mx-auto mt-16">
      <p>
        <Link to="/sign-in">Sign in</Link> or <Link to="/sing-up">sign up</Link>{" "}
        to add comments on this article.
      </p>
      {data.comments.map((comment) => (
        <CommentItem key={comment.id} {...comment} />
      ))}
    </div>
  );
};
