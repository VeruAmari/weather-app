import "./style.css";
import getWeather from "./getWeather";
import UI from "./getUI";

function calcTime() {
  // Calculate correct index for hour
  const date = new Date();
  const minutes = date.getMinutes();
  const add = minutes > 29 ? 1 : 0;
  let roundedHour = date.getHours() + add;
  roundedHour = roundedHour > 23 ? 0 : roundedHour;

  return roundedHour;
}
const currentTime = calcTime();
console.log(currentTime);

UI()
  .getButton()
  .addEventListener("click", () => {
    getWeather(UI().getLocation())
      .catch((error) => console.log(error))
      .then((data) => {
        const day = data.forecast.forecastday[0];
        UI().getWeatherContainer().classList.remove("hidden");
        console.log("Forecast Day: ", day);
        console.log("Rest of Data: ", data);
        UI().getTempMax().textContent = `Max ${day.day.maxtemp_c}°C`;
        UI().getTempMin().textContent = `Min ${day.day.mintemp_c}°C`;
        UI().getTempNow().textContent = `Now ${day.hour[currentTime].temp_c}°C`;
        UI().getHeader().textContent = `The weather in ${data.location.name}`;
        UI().getImage().setAttribute("src", `${day.day.condition.icon}`);
      });
  });
