const API_KEY_WEATHER = "02b462b89c44372685da70c8e38eba1b";
const API_KEY_LOCATION = "695f04fe03e3469192ed31e883367c13";

export const getWeatherData = async ({ longitude, latitude }) => {
  const res =
    await fetch()`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&id=524901&appid=${API_KEY_WEATHER}&units=metric&cnt=6`;
  return await res.json();
};

export const getCityCoords = async (cityName) => {
  const res = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${cityName.trim()}&key=${API_KEY_LOCATION}&language=en&pretty=1&no_annotations=1`
  );

  return await res.json();
};
