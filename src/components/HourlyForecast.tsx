import type { ForecastResponse } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type HourlyForecastProps = {
  forecasts: ForecastResponse;
};

export const HourlyForecast = ({ forecasts }: HourlyForecastProps) => {
  const { list } = forecasts;

  const formatHour = (dateTime: string) => {
    const date = new Date(dateTime.replace(" ", "T"));

    return new Intl.DateTimeFormat("es-MX", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold">Hourly Forecast</h2>
        <p className="text-sm text-muted-foreground">
          Pronóstico por intervalos de 3 horas.
        </p>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2">
        {list.map((item) => (
          <Card key={item.dt} className="min-w-55 shrink-0">
            <CardHeader>
              <CardTitle>{formatHour(item.dt_txt)}</CardTitle>
              <CardDescription>
                {item.weather[0].main} · {item.weather[0].description}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-3xl font-semibold">
                    {Math.round(item.main.temp)}°C
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Sensación {Math.round(item.main.feels_like)}°C
                  </p>
                </div>

                <img
                  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                  alt={item.weather[0].description}
                  className="h-16 w-16 rounded-full bg-slate-200"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg bg-muted/60 p-3">
                  <p className="text-muted-foreground">Humedad</p>
                  <p className="font-medium">{item.main.humidity}%</p>
                </div>

                <div className="rounded-lg bg-muted/60 p-3">
                  <p className="text-muted-foreground">Viento</p>
                  <p className="font-medium">{item.wind.speed} m/s</p>
                </div>

                <div className="rounded-lg bg-muted/60 p-3">
                  <p className="text-muted-foreground">Prob. lluvia</p>
                  <p className="font-medium">{Math.round(item.pop * 100)}%</p>
                </div>

                <div className="rounded-lg bg-muted/60 p-3">
                  <p className="text-muted-foreground">Nubosidad</p>
                  <p className="font-medium">{item.clouds.all}%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
