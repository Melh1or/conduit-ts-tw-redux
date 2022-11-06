import { FC } from "react";
import { Container } from "../../../../common/components/container/container.component";
import { Profile } from "../../api/dto/get-profile.in";
import { FollowButton } from "../follow-button/follow-button.component";

interface ProfileBannerProps {
  profile: Profile;
}

export const ProfileBanner: FC<ProfileBannerProps> = ({ profile }) => {
  return (
    <div className="pt-8 pb-4 bg-conduit-gray-100">
      <Container>
        <div>
          <img
            src={profile.image}
            className="mx-auto mb-4 rounded-full w-25 h-25"
            alt={`${profile.username} avatar`}
          />
          <h2 className="text-2xl font-bold text-center">{profile.username}</h2>
        </div>
        <div className="flex justify-end">
          <FollowButton username={profile.username} />
        </div>
      </Container>
    </div>
  );
};
