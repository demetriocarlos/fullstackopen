import { useEffect, useState } from "react";

import fetchServices from "./services/FetchDatos";
import { ShowCountry } from "./Components/ShowCountry";
import { Country } from "./Components/Country";
import { CountryForm } from "./Components/CountryForm";

function App() {
  const [datos, setDatos] = useState([]);
  const [search, setSearch] = useState("");
  const [all, setAll] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(null);

  const fetchAllCountries = () => {
    fetchServices
      .getAllCountries()
      .then((response) => {
        setAll(response.data);
      })
      .catch((error) => {
        // Maneja los errores aquí
        console.error("Error al hacer la petición:", error);
      });
  };

  //console.log("all", all);

  const fetchPaises = () => {
    if (search.trim() === "") {
      // Evitar la búsqueda vacía
      return;
    }

    fetchServices
      .getAll(search)
      .then((response) => {
        setDatos([response.data]);
      })
      .catch((error) => {
        // Maneja los errores aquí
        console.error("Error al hacer la petición:", error);
      });
  };
  //console.log("datos de la api", datos);

  useEffect(() => {
    fetchAllCountries();
    fetchPaises();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchPaises();
    setSearch("");
  };

  //console.log("filters", filteredCountries);

  useEffect(() => {
    // Filtra los países cuando se actualice el término de búsqueda
    if (search) {
      const filtered = all.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredCountries(filtered);
    } else {
      // Si no hay término de búsqueda, filteredCountries es nulo
      setFilteredCountries(null);
    }
  }, [search, all]);

  return (
    <>
      <div>
        <CountryForm
          handleSubmit={handleSubmit}
          search={search}
          setSearch={setSearch}
        />

        <ShowCountry filteredCountries={filteredCountries} />

        {datos.map((paises) => (
          <div key={paises.area}>
            <Country paises={paises} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
