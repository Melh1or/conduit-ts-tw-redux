import { FC } from "react";
import { FeedArticle } from "../../api/dto/get-feed.in";
import { Article } from "../article/article.component";

export interface ArticleListProps {
  list: FeedArticle[];
}

export const ArticleList: FC<ArticleListProps> = ({ list }) => {
  return (
    <div>
      {list.map((article) => (
        <Article key={article.slug} {...article} />
      ))}
    </div>
  );
};
