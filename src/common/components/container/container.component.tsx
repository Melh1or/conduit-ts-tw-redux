import { PropsWithChildren, FC } from "react";

interface ContainerProps {}

export const Container: FC<PropsWithChildren<ContainerProps>> = ({
  children,
}) => {
  return <div className="container mx-auto ">{children}</div>;
};
