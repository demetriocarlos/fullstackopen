import axios from "axios";

const urlPaises = "https://studies.cs.helsinki.fi/restcountries/api/all";
const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;

const getAll = (name) => {
  const request = axios.get(
    `https://studies.cs.helsinki.fi/restcountries/api/name/${name}`
  );
  return request.then((response) => response);
};

const getAllCountries = () => {
  const request = axios.get(urlPaises);
  return request.then((response) => response);
};

const getOpenWeatherMap = (city) => {
  const request = axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  );
  return request.then((response) => response);
};

export default { getAll, getAllCountries, getOpenWeatherMap };
