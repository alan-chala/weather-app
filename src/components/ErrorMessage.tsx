import type { Error } from "@/types";

type ErrorProps = {
  error: Error;
};

export const ErrorMessage = ({ error }: ErrorProps) => {
  return (
    <>
      <div className="flex flex-col gap-2 items-center justify-center">
        <img
          src="/error.svg"
          alt="Error illustration"
          className="w-full h-full object-cover"
        />
        <p className="text-center">{error.message}</p>
      </div>
    </>
  );
};
