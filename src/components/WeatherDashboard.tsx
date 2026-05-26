import type { WeatherDashboardProps } from "@/types";
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

  const temp = data?.main.temp && Math.round(data?.main.temp);
  const min_temp = data?.main.temp_min && Math.round(data?.main.temp_min);
  const max_temp = data?.main.temp_max && Math.round(data?.main.temp_max);
  const feels = data?.main.feels_like && Math.round(data?.main.feels_like);
  const humidity = data?.main.humidity && Math.round(data?.main.humidity);
  const pressure = data?.main.pressure && Math.round(data?.main.pressure);

  return (
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
        <Card className="flex-1">
          <CardContent>
            <p>Feels Like</p>
            <img className="object-cover" width={105} height={105} src="/feel.svg" alt="Feels like ico" />
          </CardContent>
          <CardFooter>
            <p>{feels}°C</p>
          </CardFooter>
        </Card>

        <Card className="flex-1">
          <CardContent>
            <p>Pressure</p>
            <img className="object-cover" width={105} height={105} src="/pressure.svg" alt="Pressure icon" />
          </CardContent>
          <CardFooter>
            <p>{pressure}hPa</p>
          </CardFooter>
        </Card>

        <Card className="flex-1">
          <CardContent>
            <p>Humidity</p>
            <img className="object-cover" width={105} height={105} src="/humidity.svg" alt="Humidity icon" />
          </CardContent>
          <CardFooter>
            <p>{humidity}%</p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};
