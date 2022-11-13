import { FC } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { Container } from "../../../common/components/container/container.component";
import { Input } from "../../../common/components/input/input.component";
import { Button } from "../../../common/components/button/button.component";
import { useLazySignUpQuery } from "../api/repository";
import { setUser } from "../service/slice";
import { useAppDispatch } from "../../../store/store";
import { useAuth } from "../hooks/use-auth";

interface SignUpPageProps {}

interface SignUpFormValues {
  username: string;
  email: string;
  password: string;
}

const validationSchema: yup.SchemaOf<SignUpFormValues> = yup.object({
  username: yup.string().required().min(3),
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
});

export const SignUpPage: FC<SignUpPageProps> = () => {
  const { signUp } = useAuth();
  const { register, handleSubmit, formState } = useForm<SignUpFormValues>({
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
    resolver: yupResolver(validationSchema),
  });
  const navigate = useNavigate();

  const onSubmit = async (values: SignUpFormValues) => {
    try {
      await signUp(values);
      navigate("/");
    } catch (e) {
      toast.error("Something wen't wrong.");
    }
  };

  return (
    <Container>
      <h1 className="mb-4 text-4xl text-center">Sign Up</h1>
      <p className="mb-4 text-center">
        <Link to="/sign-in">Have an account?</Link>
      </p>

      <form
        noValidate
        className="flex flex-col max-w-xl gap-4 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <ul className="pl-10 list-disc">
          {(
            Object.keys(formState.errors) as (keyof typeof formState.errors)[]
          ).map((field) => (
            <li key={field} className="font-bold text-conduit-red">
              {formState.errors[field]?.message}
            </li>
          ))}
        </ul>

        <Input type="text" placeholder="Username" {...register("username")} />
        <Input placeholder="Email" type="email" {...register("email")} />
        <Input
          placeholder="Password"
          type="password"
          {...register("password")}
        />
        <div className="flex justify-end">
          <Button
            btnStyle="GREEN"
            btnSize="LG"
            type="submit"
            disabled={formState.isSubmitting}
          >
            Sign up
          </Button>
        </div>
      </form>
    </Container>
  );
};
