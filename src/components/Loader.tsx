import { Spinner } from "@/components/ui/spinner";

export const Loader = () => {
  return (
    <>
      <div className="bg-sky-400 flex flex-col items-center gap-2 justify-center">
        <Spinner className="size-10" />
        <p>Loading city information...</p>
      </div>
    </>
  );
};
