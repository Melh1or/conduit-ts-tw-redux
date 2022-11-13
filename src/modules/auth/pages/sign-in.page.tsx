import { yupResolver } from "@hookform/resolvers/yup";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";

import { Button } from "../../../common/components/button/button.component";
import { Container } from "../../../common/components/container/container.component";
import { Input } from "../../../common/components/input/input.component";
import { useAuth } from "../hooks/use-auth";

interface SignInPageProps {}

interface SignInFormValues {
  email: string;
  password: string;
}

const validationSchema: yup.SchemaOf<SignInFormValues> = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
});

export const SignInPage: FC<SignInPageProps> = () => {
  const { signIn } = useAuth();
  const { register, handleSubmit, formState } = useForm<SignInFormValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(validationSchema),
  });
  const navigate = useNavigate();

  const onSubmit = async (values: SignInFormValues) => {
    try {
      await signIn(values);
      navigate("/");
    } catch (e) {
      toast.error("Something wen't wrong.");
    }
  };

  return (
    <Container>
      <h1 className="mb-4 text-4xl text-center">Sign In</h1>
      <p className="mb-4 text-center">
        <Link to="/sign-up">You need an account?</Link>
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
            Sign in
          </Button>
        </div>
      </form>
    </Container>
  );
};
