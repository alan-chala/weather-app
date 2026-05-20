import { Spinner } from "@/components/ui/spinner";

export const Loader = () => {
  return (
    <>
      <div className="p-10 flex flex-col gap-2 items-center justify-center min-h-[calc(100dvh-22.5rem)]">
        <Spinner className="size-10" />
        <p>Loading city information...</p>
      </div>
    </>
  );
};
