import { WEATHER_CODES } from "./weatherCodes.js"


const searchForm = document.querySelector("#search-form");
const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search-btn");
const errorMessage = document.querySelector("#error-message");
const loading = document.querySelector("#loading");

// creat cards

const sectionCardsPrancippale = document.querySelector("#card-principale");
const sectionDetails = document.querySelector("#details");

const divPransipale = document.createElement("div");
const div1 = document.createElement("div");
const pActuelle = document.createElement("p");
const h2CityName = document.createElement("h2");
const pWeather = document.createElement("p");
const div2 = document.createElement("div");
const span1 = document.createElement("span");
const div3 = document.createElement("div");
const pTemperature = document.createElement("p");
const pTempActuelle = document.createElement("p");
const div4 = document.createElement("div");
const div5 = document.createElement("div");
const pRessenti = document.createElement("p");
const pFeelsLike = document.createElement("p");

h2CityName.id = "city-name";
pWeather.id = "weather-description";
span1.id = "weather-icon";
pTemperature.id = "temperature";
pFeelsLike.id = "feels-like";

pActuelle.textContent = "MÉTÉO ACTUELLE";
pTempActuelle.textContent = "Température actuelle";
pRessenti.textContent = "Ressenti";

sectionCardsPrancippale.classList.add("bg-gradient-to-br", "from-sky-900", "to-slate-900", "border", "border-slate-700", "rounded-3xl", "p-7", "md:p-10", "mb-8", "hidden");
sectionDetails.classList.add("mb-10", "hidden")

divPransipale.classList.add("flex", "flex-col", "md:flex-row", "justify-between", "gap-8");
pActuelle.classList.add("text-sky-300", "text-sm", "font-medium", "mb-3");
pWeather.classList.add("text-slate-300");
div2.classList.add("flex", "items-center", "gap-4", "mt-8");
span1.classList.add("text-7xl");
pTemperature.classList.add("text-6xl", "font-bold");
pTempActuelle.classList.add("text-slate-400", "mt-2");
div4.classList.add("flex", "items-center", "justify-center");
div5.classList.add("bg-white/10", "rounded-2xl", "p-7", "text-center");
pRessenti.classList.add("text-slate-300", "text-sm", "mb-2");
pFeelsLike.classList.add("text-4xl", "font-bold");

// Détails meteorologique

const h2Details = document.createElement("h2");
const divDeta1 = document.createElement("div");
const article1 = document.createElement("article");
const divDeta2 = document.createElement("div");
const span2 = document.createElement("span");
const span3 = document.createElement("span");
const pHumidity = document.createElement("p");
const pHumidRelative = document.createElement("p");
const article2 = document.createElement("article");
const divDeta3 = document.createElement("div");
const span4 = document.createElement("span");
const span5 = document.createElement("span");
const pWindSpeed = document.createElement("p");
const pVitesse = document.createElement("p");
const article3 = document.createElement("article");
const divDeta4 = document.createElement("div");
const span6 = document.createElement("span");
const span7 = document.createElement("span");
const pWeatherCode = document.createElement("p");
const pCodeMeteo = document.createElement("p");


pHumidity.id = "humidity";
pWindSpeed.id = "wind-speed";
pWeatherCode.id = "weather-code";


h2Details.textContent = "Détails météorologiques";
span2.textContent = "Humidité";
span3.textContent = "💧";
pHumidRelative.textContent = "Humidité relative";
span4.textContent = "Vent";
span5.textContent = "🌬️";
pVitesse.textContent = "Vitesse du vent";
span6.textContent = "Conditions";
span7.textContent = "🌤️";
pCodeMeteo.textContent = "Code météo";


h2Details.classList.add("text-xl", "font-semibold", "mb-5", "font-serif");
divDeta1.classList.add("grid", "grid-cols-1", "sm:grid-cols-3", "gap-4");
article1.classList.add("bg-slate-900", "border", "border-slate-800", "rounded-2xl", "p-6");
divDeta2.classList.add("flex", "items-center", "justify-between", "mb-5");
span2.classList.add("text-slate-400");
span3.classList.add("text-2xl");
pHumidity.classList.add("text-3xl", "font-bold");
pHumidRelative.classList.add("text-sm", "text-slate-500", "mt-2");
article2.classList.add("bg-slate-900", "border", "border-slate-800", "rounded-2xl", "p-6");
divDeta3.classList.add("flex", "items-center", "justify-between", "mb-5");
span4.classList.add("text-slate-400");
span5.classList.add("text-2xl");
pWindSpeed.classList.add("text-3xl", "font-bold");
pVitesse.classList.add("text-sm", "text-slate-500", "mt-2");
article3.classList.add("bg-slate-900", "border", "border-slate-800", "rounded-2xl", "p-6");
divDeta4.classList.add("flex", "items-center", "justify-between", "mb-5");
span6.classList.add("text-slate-400");
span7.classList.add("text-2xl");
pWeatherCode.classList.add("text-3xl", "font-bold");
pCodeMeteo.classList.add("text-sm", "text-slate-500", "mt-2");





function creatCardActuelle() {
  div3.append(pTemperature, pTempActuelle);
  div2.append(span1, div3);

  div1.append(pActuelle, h2CityName, pWeather, div2);

  div5.append(pRessenti, pFeelsLike);

  div4.append(div5);

  divPransipale.append(div1, div4);

  sectionCardsPrancippale.append(divPransipale);
  sectionCardsPrancippale.classList.remove("hidden");

  divDeta2.append(span2, span3);
  article1.append(divDeta2, pHumidity, pHumidRelative);

  divDeta3.append(span4, span5);
  article2.append(divDeta3, pWindSpeed, pVitesse);

  divDeta4.append(span6, span7);
  article3.append(divDeta4, pWeatherCode, pCodeMeteo);

  divDeta1.append(article1, article2, article3)
  sectionDetails.append(h2Details, divDeta1);
  sectionDetails.classList.remove("hidden");
}






searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const urlGeocoding = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityInput.value.trim())}&count=10&language=en&format=json`;

  if (cityInput.value.trim() === "") {
    errorMessage.classList.remove("hidden");
    loading.classList.add("hidden");
    sectionCardsPrancippale.classList.add("hidden");
    sectionDetails.classList.add("hidden");

    return;
  }
  errorMessage.classList.add("hidden");
  loading.classList.remove("hidden");

  fetch(urlGeocoding)
    .then((response1) => {
      if (!response1.ok) {
        throw new Error("Erreur lors de la recherche");
      }
      return response1.json();
    })
    .then((data1) => {
      if (!data1.results || data1.results.length === 0) {
        sectionCardsPrancippale.classList.add("hidden");
        sectionDetails.classList.add("hidden");

        throw new Error("La ville n'existe pas");
      }
      const urlWeather = `https://api.open-meteo.com/v1/forecast?latitude=${data1.results[0].latitude}&longitude=${data1.results[0].longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code,apparent_temperature`;      
      fetch(urlWeather)
        .then((response2) => {
          if (!response2.ok) {
            throw new Error("Erreur");
          }
          return response2.json();
        })
        .then((data2) => {
          h2CityName.textContent = data1.results[0].name;
          const code = data2.current.weather_code;
          const weatherInfo = WEATHER_CODES[code];
          pWeather.textContent = weatherInfo?.label ?? "Météo inconnue";
          span1.textContent = weatherInfo?.icon ?? "🌡️";
          pWeatherCode.textContent = code;
          pTemperature.textContent = `${data2.current.temperature_2m} °C`;
          pFeelsLike.textContent = `${data2.current.apparent_temperature} °C`;
          pHumidity.textContent = `${data2.current.relative_humidity_2m}  %`
          pWindSpeed.textContent = `${data2.current.wind_speed_10m} km/h`
          console.log(data2.current)
          creatCardActuelle();
          
        });
    })
    .catch((error1) => {
      errorMessage.classList.remove("hidden");
      errorMessage.textContent = error1.message;
      sectionCardsPrancippale.classList.add("hidden");
      sectionDetails.classList.add("hidden");
    })
    .finally(() => {
      loading.classList.add("hidden");
    });
});
