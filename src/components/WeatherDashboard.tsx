import type {
  CurrentWeatherApiResponse,
  Error,
  ForecastResponse,
} from "@/types";
import { Loader } from "./Loader";
import { ErrorMessage } from "./ErrorMessage";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HourlyForecast } from "./HourlyForecast";
import { ContentCard } from "./ContentCard";

export type WeatherDashboardProps = {
  data: CurrentWeatherApiResponse | null;
  isLoading: boolean;
  error: Error;
  forecasts: ForecastResponse;
};

export const WeatherDashboard = ({
  data,
  isLoading,
  error,
  forecasts,
}: WeatherDashboardProps) => {
  if (isLoading) {
    return <Loader />;
  }

  if (error.hasErrors) {
    return <ErrorMessage error={error} />;
  }

  const temp = data?.main.temp && Math.round(data?.main.temp);
  const min_temp = data?.main.temp_min && Math.round(data?.main.temp_min);
  const max_temp = data?.main.temp_max && Math.round(data?.main.temp_max);
  const feels = data?.main.feels_like && Math.round(data?.main.feels_like);
  const humidity = data?.main.humidity && Math.round(data?.main.humidity);
  const pressure = data?.main.pressure && Math.round(data?.main.pressure);

  return (
    <>
      <section className="grid md:grid-cols-3 grid-cols-1 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>
              {data?.name}, {data?.sys.country}
            </CardTitle>
            <CardDescription>Current weather now</CardDescription>
          </CardHeader>
          <CardContent className="flex gap-2 items-center justify-between">
            <h1 className="text-5xl">{temp}°C</h1>
            <img
              src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@4x.png`}
              alt={`${data?.weather[0].description}`}
              className="bg-slate-300 h-16 w-16 rounded-full"
            />
          </CardContent>
          <CardFooter className="flex items-center justify-between">
            <p>
              High: <span>{max_temp}</span>
            </p>
            <p>
              Low: <span>{min_temp}</span>
            </p>
          </CardFooter>
        </Card>

        <div className="col-span-2 flex gap-4">
          <ContentCard
            name="Sensación térmica"
            imageUrl="/feel.svg"
            content={`${feels}°C`}
          />

          <ContentCard
            name="Presión"
            imageUrl="/pressure.svg"
            content={`${pressure}hPa`}
          />

          <ContentCard
            name="Humedad"
            imageUrl="/humidity.svg"
            content={`${humidity}%`}
          />
        </div>
      </section>

      <HourlyForecast forecasts={forecasts} />
    </>
  );
};
