export interface IOpenCageData {
  documentation: string;
  licenses: object[];
  rate: object;
  results: ICity[];
  status: object;
  stay_informed: string;
  thanks: string;
  timestamp: object;
  total_results: number;
}
export interface ICity {
  bounds: {
    northeast: { lat: number; lng: number };
    southwest: { lat: number; lng: number };
  };
  components: object;
  confidence: number;
  formatted: string;
  geometry: {
    lat: number;
    lng: number;
  };
}

export interface IOpenweathermap {
  city: {
    coords: { lat: number; lon: number };
    country: string;
    id: number;
    name: string;
    population: number;
    sunrise: number;
    sunset: number;
    timezone: number;
  };
  cnt: number;
  cod: string;
  list: IWeatherList[];
  message: number;
}

export interface IWeatherList {
  clouds: { all: number };
  dt: number;
  dt_txt: string;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_kf: number;
    temp_max: number;
    temp_min: number;
  };
  pop: number;
  sys: { pod: string };
  visibility: number;
  weather: {
    description: string;
    icon: string;
    id: number;
    main: string;
  }[];
  wind: {
    deg: number;
    gust: number;
    speed: number;
  };
}
export interface IGeolocationPosition<T> {
  coords: {
    accuracy: number;
    altitude: T;
    altitudeAccuracy: T;
    heading: T;
    latitude: number;
    longitude: number;
    speed: T;
  };
  timestamp: number;
}

export interface ICitySlice {
  cityData: ICity[];
  isLoading: boolean;
  error: string;
}

export interface IWeatherData {
  cityProp: string;
  country: string;
  currentTemp: number;
  feelsLike: number;
  humidity: number;
  pressure: number;
  visibility: number;
  windSpeed: number;
  weather: string;
  description: string;
  list: IWeatherList[];
}

export interface IWeatherSlice {
  weatherData: IWeatherData;
  isLoading: boolean;
  error: string;
}

export interface IStoreState {
  weather: IWeatherSlice;
  city: ICitySlice;
}

export interface IStyle {
  [prop: string]: string;
}
