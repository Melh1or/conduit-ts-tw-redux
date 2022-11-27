import { FC } from "react";
import { Container } from "../../../../common/components/container/container.component";
import { Author } from "../../api/dto/get-feed.in";
import { ArticleMeta } from "../article-meta/article-meta.component";

interface ArticleBannerProps {
  title: string;
  author: Author;
  likes: number;
  publishedAt: string;
  slug: string;
  isFavorited: boolean
}

export const ArticleBanner: FC<ArticleBannerProps> = ({
  author,
  likes,
  publishedAt,
  slug,
  isFavorited,
}) => {
  return (
    <div className="pt-8 pb-4 mb-8 bg-conduit-gray-1100">
      <Container>
        <h1 className="mb-8 font-semibold text-white text-articleTitle leading-articleTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          soluta distinctio commodi, nemo veniam itaque deleniti repudiandae
          porro? Dolorum soluta odio suscipit molestiae tenetur facere
          consequuntur ad sequi sit! Unde.
        </h1>
        <ArticleMeta
          isFavorited={isFavorited}
          slug={slug}
          authorNameStyle="GREEN"
          author={author}
          likes={likes}
          publishedAt={publishedAt}
        />
      </Container>
    </div>
  );
};
