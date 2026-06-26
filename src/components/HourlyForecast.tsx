import type { ForecastResponse } from "@/types";

type HourlyForecastProps = {
  forecasts: ForecastResponse;
};

export const HourlyForecast = ({ forecasts }: HourlyForecastProps) => {
  const { list } = forecasts;

  return (
    <section className="space-y-3">
      <div>
        <h2>Hourly Forecast</h2>
      </div>

      <div className="flex flex-1 items-center gap-4">
        {list.map((item) => (
          <p>{item.wind.deg}</p>
        ))}
      </div>
    </section>
  );
};
