// eslint-disable-next-line react/prop-types
export const Clima = ({ weatherData }) => {
  return (
    <div>
      {
        // eslint-disable-next-line react/prop-types
        weatherData.map((clima) => (
          <div key={clima.id}>
            <h2>Weather in {clima.name}</h2>
            <p>
              {" "}
              <strong>Temperature </strong>
              {(clima.main.temp - 273.15).toFixed(1)} Celcius
            </p>
            <img
              src={`http://openweathermap.org/img/wn/${clima.weather[0].icon}.png`}
              alt="Weather icon"
            />
            <p>
              <strong>Wind </strong> {clima.wind.speed} m/s
            </p>
          </div>
        ))
      }
    </div>
  );
};
