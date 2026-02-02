import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon/WeatherIcon.jsx";
import WeatherData from "./WeatherData/WeatherData.jsx";

const WeatherForecastItem = ({ day, img, imgAlt, conditions, time }) => {
  return (
    <div className="weather">
      <h2>{day}</h2>
      <WeatherIcon img={img} imgAlt={imgAlt} />
      <WeatherData conditions={conditions} time={time} />
    </div>
  );
};

export default WeatherForecastItem;
