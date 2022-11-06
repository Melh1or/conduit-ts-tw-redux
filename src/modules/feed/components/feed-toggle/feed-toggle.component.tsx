import { FC } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import clsx from "clsx";

interface FeedToggleItem {
  text: string;
  link: string;
}

interface FeedToggleProps {
  defaultText?: string;
  defaultLink?: string;
  items?: FeedToggleItem[];
}

export const FeedToggle: FC<FeedToggleProps> = ({
  defaultText = "Global feed",
  defaultLink = "/",
  items = [],
}) => {
  const [searchParams] = useSearchParams();
  const tag = searchParams.get("tag");

  const globalFeedClasses = ({ isActive }: { isActive: boolean }) =>
    clsx(
      "inline-block px-4 py-2 bg-white hover:no-underline border-conduit-green",
      {
        "text-black/30 hover:text-black/60": tag || !isActive,
        "border-b-2": !tag && isActive,
      }
    );

  return (
    <div>
      <ul className="flex">
        <li>
          <NavLink to={defaultLink} className={globalFeedClasses} end>
            {defaultText}
          </NavLink>
        </li>
        {items.map((item) => (
          <NavLink key={item.link} to={item.link} className={globalFeedClasses}>
            {item.text}
          </NavLink>
        ))}
        {tag && (
          <p className="inline-block px-4 py-2 bg-white border-b-2 text-conduit-green hover:no-underline border-conduit-green">
            # {tag}
          </p>
        )}
      </ul>
    </div>
  );
};
