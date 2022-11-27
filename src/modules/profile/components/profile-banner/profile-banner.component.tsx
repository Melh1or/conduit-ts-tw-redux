import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../common/components/button/button.component";
import { Container } from "../../../../common/components/container/container.component";
import { routes } from '../../../../core/routes';
import { useAuth } from "../../../auth/hooks/use-auth";
import { Profile } from "../../api/dto/get-profile.in";
import { FollowButton } from "../follow-button/follow-button.component";

interface ProfileBannerProps {
  profile: Profile;
}

export const ProfileBanner: FC<ProfileBannerProps> = ({ profile }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const toToSettings = () => {
    navigate(routes.settings.path);
  };

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
          {user?.username !== profile.username ? (
            <FollowButton username={profile.username} />
          ) : (
            <Button onClick={toToSettings}>
              <i className="mr-1 ion-gear-a" />
              Edit settings
            </Button>
          )}
        </div>
      </Container>
    </div>
  );
};
