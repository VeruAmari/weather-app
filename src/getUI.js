export default function getUI() {
  const location = document.getElementById("location");
  const weatherButton = document.getElementById("location-btn");
  const weatherContainer = document.querySelector(".forecast");
  const getLocation = () => location.value;
  const getButton = () => weatherButton;
  const getForecastContainer = () => weatherContainer;

  return { getLocation, getButton, getForecastContainer };
}
