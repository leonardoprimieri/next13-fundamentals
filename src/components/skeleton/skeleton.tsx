import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type Props = ComponentProps<"div">;

export const Skeleton = ({ className, ...props }: Props) => {
  return (
    <div
      className={twMerge("bg-zinc-50/10 animate-pulse rounded-md", className)}
      {...props}
    />
  );
};
