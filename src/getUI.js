export default function UI() {
  const getLocation = () => document.getElementById("location").value; // Doesn't return a Node, but it's VALUE
  const getButton = () => document.getElementById("location-btn");

  const getCurrentDisplay = () => document.getElementById("current-display");
  const getTempFormat = () => document.getElementById("temperature-format");
  // Make weather cards
  const getForm = () => document.getElementById("get-weather");
  function makeCard() {
    const forecast = document.createElement("div");
    forecast.classList.add("forecast");
    const header = document.createElement("div");
    header.classList.add("header");
    const weatherContainer = document.createElement("div");
    weatherContainer.classList.add("weather", "container");

    forecast.appendChild(header);
    forecast.appendChild(weatherContainer);

    const img = document.createElement("img");
    const temperatures = document.createElement("div");
    temperatures.classList.add("temperatures");

    weatherContainer.appendChild(img);
    weatherContainer.appendChild(temperatures);

    const tempMax = document.createElement("span");
    tempMax.classList.add("temp", "max");
    const tempMin = document.createElement("span");
    tempMin.classList.add("temp", "min");
    const tempNow = document.createElement("span");
    tempNow.classList.add("temp", "now");

    temperatures.appendChild(tempMax);
    temperatures.appendChild(tempMin);
    temperatures.appendChild(tempNow);

    const getWeatherContainer = () => forecast;
    const getHeader = () => header;
    const getImage = () => img;
    const getTempNow = () => tempNow;
    const getTempMax = () => tempMax;
    const getTempMin = () => tempMin;

    return {
      getWeatherContainer,
      getHeader,
      getImage,
      getTempMax,
      getTempMin,
      getTempNow,
    };
  }

  return {
    getLocation,
    getButton,
    getCurrentDisplay,
    getTempFormat,
    makeCard,
    getForm,
  };
}
