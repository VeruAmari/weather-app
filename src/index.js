import "./style.css";
import { getWeather } from "./getWeather";
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
// console.log(currentTime);
function cleanUp() {
  const previous = document.querySelectorAll(".forecast");
  previous.forEach((element) => {
    document.querySelector(".body.container").removeChild(element);
  });
}
function displayWeather() {
  getWeather(UI().getLocation())
    .catch((error) => console.log(error))
    .then((data) => {
      document.getElementById("changing-location").textContent =
        data.location.name;
      data.forecast.forecastday.forEach((day) => {
        const card = UI().makeCard();
        let today;
        switch (data.forecast.forecastday.indexOf(day)) {
          case 0:
            today = "Today";
            break;
          case 1:
            today = "Tomorrow";
            break;
          case 2:
            today = "After";
            break;
          default:
            break;
        }
        console.log(day);
        // console.log("Forecast Day: ", day);
        // console.log("Rest of Data: ", data);
        const tempFormat = UI().getTempFormat().textContent;

        card.getTempMax().textContent =
          tempFormat === "C"
            ? `Max ${day.day.maxtemp_c}°C`
            : `Max ${day.day.maxtemp_f}°F`;
        card.getTempMin().textContent =
          tempFormat === "C"
            ? `Min ${day.day.mintemp_c}°C`
            : `Min ${day.day.mintemp_f}°F`;
        card.getTempNow().textContent =
          tempFormat === "C"
            ? `Now ${day.hour[currentTime].temp_c}°C`
            : `Now ${day.hour[currentTime].temp_f}°F`;
        card.getHeader().textContent = `${today}`;
        card.getImage().setAttribute("src", `${day.day.condition.icon}`);

        document
          .querySelector(".body.container")
          .appendChild(card.getWeatherContainer());
      });
    });
}
UI()
  .getCurrentDisplay()
  .addEventListener("click", () => {
    const format = UI().getTempFormat();
    format.textContent = format.textContent === "C" ? "F" : "C";
  });

UI()
  .getForm()
  .addEventListener("submit", (event) => {
    event.preventDefault();
    cleanUp();
    displayWeather();
  });

displayWeather();
