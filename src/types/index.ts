export type CurrentWeatherApiResponse = {
  coord: {
    lon: number;
    lat: number;
  };

  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];

  base: string;

  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };

  visibility: number;

  wind: {
    speed: number;
    deg: number;
    gust: number;
  };

  clouds: {
    all: number;
  };

  dt: number;

  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };

  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export type NavProps = {
  getCurrentWeather: (city: string) => void;
};

export type Error = {
  hasErrors: boolean;
  message: string;
};

export type ForecastResponse = {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastItem[];
  city: City;
};

export type ForecastItem = {
  dt: number;
  main: MainWeather;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  rain?: Rain;
  sys: Sys;
  dt_txt: string;
};

export type MainWeather = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
  dew_point: number;
};

export type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type Clouds = {
  all: number;
};

export type Wind = {
  speed: number;
  deg: number;
  gust: number;
};

export type Rain = {
  "3h": number;
};

export type Sys = {
  pod: "d" | "n";
};

export type City = {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
};

export type Coord = {
  lat: number;
  lon: number;
};
