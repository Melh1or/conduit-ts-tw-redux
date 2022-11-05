import { FC } from "react";
import { Container } from "../../../../common/components/container/container.component";
import { FollowButton } from "../follow-button/follow-button.component";

interface ProfileBannerProps {}

export const ProfileBanner: FC<ProfileBannerProps> = () => {
  return (
    <div className="pt-8 pb-4 bg-conduit-gray-100">
      <Container>
        <div>
          <img
            src="/"
            className="mx-auto mb-4 rounded-full w-25 h-25"
            alt="username avatar"
          />
          <h2 className="text-2xl font-bold text-center">Magda</h2>
        </div>
        <div className="flex justify-end">
          <FollowButton />
        </div>
      </Container>
    </div>
  );
};
