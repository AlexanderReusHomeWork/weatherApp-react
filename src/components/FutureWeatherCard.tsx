const FutureWeatherCard = function ({
  temp,
  icon,
  time,
}: {
  temp: number;
  icon: string;
  time: string;
}) {
  return (
    <div>
      <span style={temp > 20 ? { color: "#fc5353" } : { color: "#5f5ae4" }}>
        {temp}°
      </span>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather-icon"
      />
      <p>{time}</p>
    </div>
  );
};

export default FutureWeatherCard;
