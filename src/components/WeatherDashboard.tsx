import type { WeatherDashboardProps } from "@/types";

export const WeatherDashboard = ({
  data,
  isLoading,
  error,
}: WeatherDashboardProps) => {
  if (isLoading) {
    console.log("Loading...");
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
