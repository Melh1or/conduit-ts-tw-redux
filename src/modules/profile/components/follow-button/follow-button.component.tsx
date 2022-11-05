import { FC } from "react";

interface FollowButtonProps {}

export const FollowButton: FC<FollowButtonProps> = () => {
  return (
    <button className="px-2 py-1 text-sm text-center align-middle border cursor-pointer select-none rounded-buttonSm border-conduit-gray-700 text-conduit-gray-700 hover:bg-conduit-gray-400 focus:bg-conduit-gray-400 active:bg-conduit-gray-650">
      <i className="ion-plus-round" />
      &nbsp;Follow magda
    </button>
  );
};
