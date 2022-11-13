import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../store/store";
import { SignInOutDto } from "../api/dto/sign-in.out.dto";
import { SignUpOutDto } from "../api/dto/sign-up.out.dto";
import { useLazySignInQuery, useLazySignUpQuery } from "../api/repository";
import { selectUser, setUser } from "../service/slice";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const [triggerSignInQuery] = useLazySignInQuery();
  const [triggerSignUpQuery] = useLazySignUpQuery();

  const user = useSelector(selectUser);
  const isLoggedIn = Boolean(user);

  const signIn = async (values: SignInOutDto["user"]) => {
    const { data } = await triggerSignInQuery(values, false);
    if (!data) {
      throw new Error("No data in query");
    }
    dispatch(setUser(data!.user));
  };

  const signUp = async (values: SignUpOutDto["user"]) => {
    const { data } = await triggerSignUpQuery(values, false);
    if (!data) {
      throw new Error("No data in query");
    }
    dispatch(setUser(data!.user));
  };

  const logOut = () => {
    dispatch(setUser(null));
  };

  return {
    user,
    isLoggedIn,
    signIn,
    signUp,
    logOut,
  };
};
