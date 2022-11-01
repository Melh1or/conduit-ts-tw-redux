import { FC } from "react";
import { NavLink } from "react-router-dom";

interface FeedToggleProps {}

export const FeedToggle: FC<FeedToggleProps> = () => {
  return (
    <div>
      <ul className="flex">
        <li>
          <NavLink
            to="/"
            className="inline-block bg-white text-conduit-green py-2 px-4 hover:no-underline border-b-2 border-conduit-green"
          >
            Global feed
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
