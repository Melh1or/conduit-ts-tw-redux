import { FC } from "react";

interface FavoriteButtonProps {
  count: number;
  extended?: boolean;
}

export const FavoriteButton: FC<FavoriteButtonProps> = ({
  count,
  extended,
}) => {
  return (
    <button className="px-2 py-1 text-sm text-center align-middle border cursor-pointer select-none text-conduit-green border-conduit-green rounded-buttonSm hover:text-white hover:bg-conduit-green focus:text-white focus:bg-conduit-darkGreen">
      <i className="ion-heart" />
      <span className="ml-1 font-normal">
        {extended && "Favorite Article ("}
        {count}
        {extended && ")"}
      </span>
    </button>
  );
};
