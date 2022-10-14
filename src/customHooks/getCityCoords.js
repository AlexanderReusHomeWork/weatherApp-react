const API_KEY_LOCATION = "695f04fe03e3469192ed31e883367c13";

export const getCityCoords = async function (city) {
  const res = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${city.trim()}&key=${API_KEY_LOCATION}&language=en&pretty=1&no_annotations=1`
  );
  const data = await res.json();

  const cityResult = data.results;
  console.log(cityResult);

  /* .catch((_) => this.renderErrorMsg("Such city does`nt exist")); */
};
