import { FC } from "react";

interface FavoriteButtonProps {}

export const FavoriteButton: FC<FavoriteButtonProps> = () => {
  return (
    <button className="text-conduit-green border-conduit-green text-center align-middle cursor-pointer select-none border py-1 px-2 text-sm rounded-buttonSm hover:text-white hover:bg-conduit-green focus:text-white focus:bg-conduit-darkGreen">
      <i className="ion-heart" />
      <span className="ml-1 font-normal">70</span>
    </button>
  );
};
