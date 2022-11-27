import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../common/components/button/button.component";
import { routes } from "../../../../core/routes";
import { useAuth } from "../../../auth/hooks/use-auth";
import { useFavoriteArticleMutation, useUnfavoriteArticleMutation } from "../../api/repository";

interface FavoriteButtonProps {
  count: number;
  extended?: boolean;
  slug: string;
  isFavorited: boolean;
}

export const FavoriteButton: FC<FavoriteButtonProps> = ({
  count,
  extended,
  slug,
  isFavorited = false,
}) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [triggerFavoriteMutation, favoritedMutationState] =
    useFavoriteArticleMutation();
  const [triggerUnfavoriteMutation, unfavoritedMutationState] =
    useUnfavoriteArticleMutation();

  const handleFavoriteClick = async () => {
    if (!isLoggedIn) {
      navigate(routes.signIn.path);
      return;
    }

    if (isFavorited) {
      await triggerUnfavoriteMutation({ slug });
    } else {
      await triggerFavoriteMutation({ slug });
    }
  };

  return (
    <Button
      btnStyle="GREEN"
      btnVariant={isFavorited ? "BASE" : "OUTLINED"}
      onClick={handleFavoriteClick}
      disabled={
        favoritedMutationState.isLoading || unfavoritedMutationState.isLoading
      }
    >
      <i className="ion-heart" />
      <span className="ml-1 font-normal">
        {extended && "Favorite Article ("}
        {count}
        {extended && ")"}
      </span>
    </Button>
  );
};
