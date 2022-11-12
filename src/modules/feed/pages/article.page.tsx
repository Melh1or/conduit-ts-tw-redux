import { FC } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../../common/components/container/container.component";
import { useGetSingleArticleQuery } from "../api/repository";
import { ArticleBanner } from "../components/article-banner/article-banner.component";
import { ArticleMeta } from "../components/article-meta/article-meta.component";
import { CommentsList } from "../components/comments-list/comments-list.components";
import { TagList } from "../components/tag-list/tag-list.component";

interface ArticlePageProps {}

const convertNewLines = (body: string) => {
  return body.split("\\n").join("<br />");
};

export const ArticlePage: FC<ArticlePageProps> = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data, isLoading } = useGetSingleArticleQuery({ slug: slug! });

  if (isLoading) {
    return null;
  }

  if (!data) {
    return <p>Article not found</p>;
  }

  return (
    <>
      <ArticleBanner
        title={data.article.title}
        author={data.article.author}
        likes={data.article.favoritesCount}
        publishedAt={data.article.createdAt}
      />
      <Container>
        <div className="pb-8 mb-6 border-b">
          <p
            className="mb-8 text-articleBody leading-articleTitle font-sourceSerif"
            dangerouslySetInnerHTML={{
              __html: convertNewLines(data.article.body),
            }}
          />
          <TagList list={data.article.tagList} />
        </div>
        <div className="flex justify-center">
          <ArticleMeta
            publishedAt={data.article.createdAt}
            likes={data.article.favoritesCount}
            author={data.article.author}
            authorNameStyle="GREEN"
          />
        </div>

        <CommentsList /> 
      </Container>
    </>
  );
};
