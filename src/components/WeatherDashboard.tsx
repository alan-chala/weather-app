import type { WeatherDashboardProps } from "@/types";
import { Loader } from "./Loader";
import { ErrorMessage } from "./ErrorMessage";

export const WeatherDashboard = ({
  data,
  isLoading,
  error,
}: WeatherDashboardProps) => {
  if (isLoading) {
    return <Loader />;
  }

  if (error.hasErrors) {
    return <ErrorMessage error={error} />;
  }

  return (
    <>
      <h1>Successful!</h1>
    </>
  );
};
