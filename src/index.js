import "./style.css";
import getWeather from "./getWeather";
import getUI from "./getUI";

getUI()
  .getButton()
  .addEventListener("click", () => {
    let info = "";
    getWeather(getUI().getLocation())
      .catch((error) => console.log(error))
      .then((forecast) => {
        forecast.forecast.forecastday.map((day) => {
          console.log(day);

          info += JSON.stringify(day);

          return 0;
        });

        getUI().getForecastContainer().textContent = info;
      });
  });
