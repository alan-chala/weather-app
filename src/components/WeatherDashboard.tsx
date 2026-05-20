import type { WeatherDashboardProps } from "@/types";
import { Loader } from "./Loader";

export const WeatherDashboard = ({
  data,
  isLoading,
  error,
}: WeatherDashboardProps) => {
  if (isLoading) {
    return <Loader />;
  }

  if (error.hasErrors) {
    console.log(error.message);
  }

  return (
    <>
      <h1>Successful!</h1>
    </>
  );
};
