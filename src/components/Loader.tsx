import { Spinner } from "@/components/ui/spinner";

export const Loader = () => {
  return (
    <>
      <div className="flex flex-col gap-2 items-center justify-center min-h-80">
        <Spinner className="size-10" />
        <p>Cargando información del clima...</p>
      </div>
    </>
  );
};
