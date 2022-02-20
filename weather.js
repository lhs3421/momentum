function fail() {
  alert("We can't find your location");
}

function success(position) {
  const API_KEY = "3154b9a648a8701a186622d03c6668cb";
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  const h4 = document.querySelector("#weather");
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = data.name;
      const weather = data.weather[0].main;
      const temp = data.main.temp;
      h4.innerText = `${city}, ${weather}, ${temp},`;
    });
}

navigator.geolocation.getCurrentPosition(success, fail);
