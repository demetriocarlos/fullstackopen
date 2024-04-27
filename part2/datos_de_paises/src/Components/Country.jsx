import { useEffect, useState } from "react";
//import axios from "axios";
import fetchServices from "../services/FetchDatos";
import { Clima } from "./Clima";

// eslint-disable-next-line react/prop-types
export const Country = ({ paises }) => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      fetchServices
        // eslint-disable-next-line react/prop-types
        .getOpenWeatherMap(paises.capital)
        .then((response) => {
          setWeatherData([response.data]);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    };
    // eslint-disable-next-line react/prop-types
    if (paises.capital !== "") {
      // Solo hace la petición si la ciudad ha sido ingresada
      fetchData();
    }
    // eslint-disable-next-line react/prop-types, react-hooks/exhaustive-deps
  }, [paises.capital]);

  //console.log("clima api", weatherData);

  return (
    <div>
      <h1>
        {
          // eslint-disable-next-line react/prop-types
          paises.name.common
        }
      </h1>

      <p>
        capital:{" "}
        {
          // eslint-disable-next-line react/prop-types
          paises.capital
        }
      </p>

      <p>
        area:{" "}
        {
          // eslint-disable-next-line react/prop-types
          paises.area
        }
      </p>

      <strong>languages:</strong>

      <ul>
        {
          // eslint-disable-next-line react/prop-types
          Object.values(paises.languages).map((language, index) => (
            <li key={index}>{language}</li>
          ))
        }
      </ul>

      <img
        src={
          // eslint-disable-next-line react/prop-types
          paises.flags.png
        }
        alt=""
      />

      <Clima weatherData={weatherData} />
    </div>
  );
};
