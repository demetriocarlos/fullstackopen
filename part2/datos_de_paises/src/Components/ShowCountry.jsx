import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const ShowCountry = ({ filteredCountries }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleCountryClick = (country) => {
    if (selectedCountry === country) {
      // Si se hace clic en el mismo país, oculta los detalles
      setSelectedCountry(null);
      setShowDetails(false);
    } else {
      // Si se hace clic en un país diferente, muestra los detalles
      setSelectedCountry(country);
      setShowDetails(true);
    }
  };

  return (
    <div>
      {
        // eslint-disable-next-line react/prop-types
        filteredCountries && filteredCountries.length > 10 ? (
          <p>Too many match, specify another filter </p>
        ) : (
          // eslint-disable-next-line react/prop-types

          filteredCountries &&
          // eslint-disable-next-line react/prop-types
          filteredCountries.map((country, index) => (
            <div key={index}>
              <div>
                {country.name.common} :
                <button onClick={() => handleCountryClick(country)}>
                  Show
                </button>
              </div>
            </div>
          ))
        )
      }

      {filteredCountries && selectedCountry && (
        <div>
          <h2>{selectedCountry.name.common}</h2>

          <p>capital: {selectedCountry.capital}</p>
          <p>Área: {selectedCountry.area}</p>

          <strong>languages:</strong>
          <ul>
            {Object.values(selectedCountry.languages).map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>

          <img src={selectedCountry.flags.png} alt="" />
        </div>
      )}
    </div>
  );
};
