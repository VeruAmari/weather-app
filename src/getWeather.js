export async function getWeather(input) {
  const city = input !== "" ? input : "London";
  const weather = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=1b4c098e88594855994210217230112&q=${city}&days=3`,
    { mode: "cors" },
  );
  const processed = await weather.json();
  // console.log(processed);
  return processed;
}

// Figure out a way to handle the data inside the async function

export function handleData() {}
