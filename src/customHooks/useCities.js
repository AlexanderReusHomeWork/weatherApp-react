import { useEffect, useState } from "react";

const API_KEY_LOCATION = "695f04fe03e3469192ed31e883367c13";

const useCities = function (city) {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    const getCityCoords = async () => {
      try {
        if (!city) return;
        const res = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${city.trim()}&key=${API_KEY_LOCATION}&language=en&pretty=1&no_annotations=1`
        );
        const data = await res.json();
        const cityResult = data.results;
        setCities(cityResult);
      } catch (err) {
        console.log(err.message);
      }
    };
    getCityCoords();
  }, [city]);
  return cities;
};

export default useCities;
/* .catch((_) => this.renderErrorMsg("Such city does`nt exist")); */
