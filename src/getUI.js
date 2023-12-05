export default function getUI() {
  const getLocation = () => document.getElementById("location").value; // Doesn't return a Node, but it's VALUE
  const getButton = () => document.getElementById("location-btn");
  const getWeatherContainer = () =>
    document.querySelector(".weather.container");
  const getHeader = () => document.querySelector(".header");
  const getImage = () => document.getElementById("weather-icon");
  const getTempNow = () => document.getElementById("temp-now");
  const getTempMax = () => document.getElementById("temp-max");
  const getTempMin = () => document.getElementById("temp-min");

  return {
    getLocation,
    getButton,
    getWeatherContainer,
    getHeader,
    getImage,
    getTempNow,
    getTempMax,
    getTempMin,
  };
}
