import { FC } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import clsx from "clsx";

interface FeedToggleProps {}

export const FeedToggle: FC<FeedToggleProps> = () => {
  const [searchParams] = useSearchParams();
  const tag = searchParams.get("tag");

  return (
    <div>
      <ul className="flex">
        <li>
          <NavLink
            to="/"
            className={clsx(
              "inline-block px-4 py-2 bg-white  text-conduit-green hover:no-underline border-conduit-green",
              {
                "border-b-2": !tag,
              }
            )}
          >
            Global feed
          </NavLink>
        </li>
        {tag && (
          <p className="inline-block px-4 py-2 bg-white border-b-2 text-conduit-green hover:no-underline border-conduit-green">
            # {tag}
          </p>
        )}
      </ul>
    </div>
  );
};
