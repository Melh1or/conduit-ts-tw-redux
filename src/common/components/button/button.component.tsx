import clsx from "clsx";
import { ButtonHTMLAttributes, FC } from "react";

export enum ButtonStyleEnum {
  DARK = "DARK",
  LIGHT = "LIGHT",
  GREEN = "GREEN",
}

export enum ButtonVariantEnum {
  BASE = "BASE",
  OUTLINED = "OUTLINED",
}

export enum ButtonSizeEnum {
  BASE = "BASE",
  LG = "LG",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnStyle?: keyof typeof ButtonStyleEnum;
  btnSize?: keyof typeof ButtonSizeEnum;
  btnVariant?: keyof typeof ButtonVariantEnum;
}

export const Button: FC<ButtonProps> = ({
  btnStyle = ButtonStyleEnum.DARK,
  btnSize = ButtonSizeEnum.BASE,
  btnVariant = ButtonVariantEnum.BASE,
  children,
  className,
  ...props
}) => {
  const btnClasses = clsx(
    "text-center align-middle border cursor-pointer select-none active:bg-conduit-gray-650 hover:bg-conduit-gray-400 focus:bg-conduit-gray-400 disabled:opacity-70",
    {
      "border-conduit-gray-700 text-conduit-gray-700":
        btnStyle === ButtonStyleEnum.DARK,
      "border-conduit-gray-400 text-conduit-gray-400 hover:text-white":
        btnStyle === ButtonStyleEnum.LIGHT,

      "border-conduit-green active:bg-conduit-darkGreen":
        btnStyle === ButtonStyleEnum.GREEN,

      "bg-conduit-green text-white hover:border-conduit-darkGreen hover:bg-conduit-darkGreen hover:text-white":
        btnStyle === ButtonStyleEnum.GREEN &&
        btnVariant === ButtonVariantEnum.BASE,

      "bg-white text-conduit-green hover:bg-conduit-green hover:text-white disabled:bg-conduit-darkGreen disabled:text-white":
        btnStyle === ButtonStyleEnum.GREEN &&
        btnVariant === ButtonVariantEnum.OUTLINED,

      "px-2 py-1 text-sm rounded-buttonSm": btnSize === ButtonSizeEnum.BASE,
      "px-6 py-3 text-sm rounded": btnSize === ButtonSizeEnum.LG,
    }
  );

  return (
    <button {...props} className={btnClasses}>
      {children}
    </button>
  );
};
