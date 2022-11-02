import clsx from "clsx";
import { FC } from "react";
import { Link } from "react-router-dom";

enum TagListStyle {
  DARK = "DARK",
  LIGHT = "LIGHT",
}

interface TagListProps {
  list: string[];
  itemStyle?: keyof typeof TagListStyle;
  itemAs?: "li" | "a";
}

export const TagList: FC<TagListProps> = ({
  list,
  itemStyle = TagListStyle.LIGHT,
  itemAs = "li",
}) => {
  const itemClasses = clsx(
    "font-light border text-date mr-1 mb-0.2 px-tag rounded-tag",
    {
      "border-conduit-lightenGray text-conduit-tag":
        itemStyle === TagListStyle.LIGHT,
      "border-conduit-tagItemBg bg-conduit-tagItemBg text-white hover:bg-conduit-tagItemBgDarken":
        itemStyle === TagListStyle.DARK,
      "hover:text-white hover:no-underline":
        itemAs === "a" && itemStyle === TagListStyle.DARK,
    }
  );

  const getListItem = (tag: string) =>
    ({
      li: (
        <li key={tag} className={itemClasses}>
          {tag}
        </li>
      ),
      a: (
        <Link key={tag} to={`/?tag=${tag}`} className={itemClasses}>
          {tag}
        </Link>
      ),
    }[itemAs]);

  return <ul className="flex flex-wrap">{list.map(getListItem)}</ul>;
};
