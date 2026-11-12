import { WEATHER_CODES } from "./weatherCodes.js";

const searchForm = document.querySelector("#search-form");
const cityInput = document.querySelector("#city-input");
const errorMessage = document.querySelector("#error-message");
const loading = document.querySelector("#loading");
const forecastContainer = document.querySelector("#forecast-container");
const retryBtn = document.querySelector("#retry-btn");
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

h2CityName.id = "city-name";
pWeather.id = "weather-description";
span1.id = "weather-icon";
pTemperature.id = "temperature";

pActuelle.textContent = "MÉTÉO ACTUELLE";
pTempActuelle.textContent = "Température actuelle";

sectionCardsPrancippale.classList.add(
  "bg-gradient-to-br",
  "from-sky-900",
  "to-slate-900",
  "border",
  "border-slate-700",
  "rounded-3xl",
  "p-7",
  "md:p-10",
  "mb-8",
  "hidden",
);
sectionDetails.classList.add("mb-10", "hidden");
forecastContainer.classList.add(
  "grid",
  "grid-cols-2",
  "sm:grid-cols-3",
  "md:grid-cols-5",
  "gap-4",
);

divPransipale.classList.add(
  "flex",
  "flex-col",
  "md:flex-row",
  "justify-between",
  "gap-8",
);
pActuelle.classList.add("text-sky-300", "text-sm", "font-medium", "mb-3");
pWeather.classList.add("text-slate-300");
div2.classList.add("flex", "items-center", "gap-4", "mt-8");
span1.classList.add("text-7xl");
pTemperature.classList.add("text-6xl", "font-bold");
pTempActuelle.classList.add("text-slate-400", "mt-2");

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
article1.classList.add(
  "bg-slate-900",
  "border",
  "border-slate-800",
  "rounded-2xl",
  "p-6",
);
divDeta2.classList.add("flex", "items-center", "justify-between", "mb-5");
span2.classList.add("text-slate-400");
span3.classList.add("text-2xl");
pHumidity.classList.add("text-3xl", "font-bold");
pHumidRelative.classList.add("text-sm", "text-slate-500", "mt-2");
article2.classList.add(
  "bg-slate-900",
  "border",
  "border-slate-800",
  "rounded-2xl",
  "p-6",
);
divDeta3.classList.add("flex", "items-center", "justify-between", "mb-5");
span4.classList.add("text-slate-400");
span5.classList.add("text-2xl");
pWindSpeed.classList.add("text-3xl", "font-bold");
pVitesse.classList.add("text-sm", "text-slate-500", "mt-2");
article3.classList.add(
  "bg-slate-900",
  "border",
  "border-slate-800",
  "rounded-2xl",
  "p-6",
);
divDeta4.classList.add("flex", "items-center", "justify-between", "mb-5");
span6.classList.add("text-slate-400");
span7.classList.add("text-2xl");
pWeatherCode.classList.add("text-3xl", "font-bold");
pCodeMeteo.classList.add("text-sm", "text-slate-500", "mt-2");

function creatCardActuelle() {
  div3.append(pTemperature, pTempActuelle);
  div2.append(span1, div3);

  div1.append(pActuelle, h2CityName, pWeather, div2);

  divPransipale.append(div1);

  sectionCardsPrancippale.append(divPransipale);
  sectionCardsPrancippale.classList.remove("hidden");

  divDeta2.append(span2, span3);
  article1.append(divDeta2, pHumidity, pHumidRelative);

  divDeta3.append(span4, span5);
  article2.append(divDeta3, pWindSpeed, pVitesse);

  divDeta4.append(span6, span7);
  article3.append(divDeta4, pWeatherCode, pCodeMeteo);

  divDeta1.append(article1, article2, article3);
  sectionDetails.append(h2Details, divDeta1);
  sectionDetails.classList.remove("hidden");
}

function creatForecastCard(date, tempMax, tempMin, code) {
  const divCard = document.createElement("div");
  const pDate = document.createElement("p");
  const spanIcon = document.createElement("span");
  const pDescription = document.createElement("p");
  const pMax = document.createElement("p");
  const pMin = document.createElement("p");

  const dat = new Date(date);

  pDate.textContent = dat.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "short",
  });

  const weatherInfo = WEATHER_CODES[code];
  pDescription.textContent = weatherInfo?.label ?? "Météo inconnue";
  spanIcon.textContent = weatherInfo?.icon ?? "🌡️";

  pMax.textContent =
    tempMax != null ? `max: ${tempMax} °C` : "Donnée indisponible";
  pMin.textContent =
    tempMin != null ? `min: ${tempMin} °C` : "Donnée indisponible";

  divCard.classList.add(
    "bg-slate-900",
    "border",
    "border-slate-800",
    "rounded-2xl",
    "p-5",
  );
  pDate.classList.add("text-sm", "text-slate-400");
  spanIcon.classList.add("text-4xl");
  pDescription.classList.add("text-slate-300");
  pMax.classList.add("text-xl", "font-semibold");
  pMin.classList.add("text-xl", "font-semibold");

  divCard.append(pDate, spanIcon, pDescription, pMax, pMin);
  forecastContainer.classList.remove("hidden");

  return divCard;
}

let lastCity = "";
searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const urlGeocoding = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityInput.value.trim())}&count=10&language=en&format=json`;
  lastCity = cityInput.value.trim();
  if (cityInput.value.trim() === "") {
    errorMessage.classList.remove("hidden");
    loading.classList.add("hidden");
    sectionCardsPrancippale.classList.add("hidden");
    sectionDetails.classList.add("hidden");
    forecastContainer.classList.add("hidden");

    return;
  }
  errorMessage.classList.add("hidden");
  loading.classList.remove("hidden");
  retryBtn.classList.add("hidden");
  try {
    const response1 = await fetch(urlGeocoding);
    if (!response1.ok) {
      if (response1.status === 429) {
        throw new Error("Quota atteint");
      } else if (response1.status === 500) {
        throw new Error("Erreur serveur");
      } else if (response1.status === 503) {
        throw new Error("Service indisponible");
      } else {
        throw new Error(`Erreur serveur (${response1.status}).`);
      }
    }
    const data1 = await response1.json();

    if (!data1.results || data1.results.length === 0) {
      sectionCardsPrancippale.classList.add("hidden");
      sectionDetails.classList.add("hidden");
      forecastContainer.classList.add("hidden");

      throw new Error("Cette ville n'existe pas");
    }

    const urlWeather = `https://api.open-meteo.com/v1/forecast?latitude=${data1.results[0].latitude}&longitude=${data1.results[0].longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&daily=temperature_2m_max,temperature_2m_min,weather_code&forecast_days=5&timezone=auto`;
    const response2 = await fetch(urlWeather);

    if (!response2.ok) {
      if (response2.status === 429) {
        throw new Error("Quota atteint. Réessayez plus tard.");
      } else if (response2.status === 500 || response2.status === 503) {
        throw new Error("Service météo indisponible.");
      } else {
        throw new Error(`Erreur serveur (${response2.status}).`);
      }
    }

    const data2 = await response2.json();

    h2CityName.textContent = data1.results[0].name;
    const code = data2.current.weather_code;
    const weatherInfo = WEATHER_CODES[code];

    if (weatherInfo) {
      pWeather.textContent = weatherInfo.label;
      span1.textContent = weatherInfo.icon;
    } else {
      pWeather.textContent = "Météo inconnue";
      span1.textContent = "🌡️";
    }

    pWeatherCode.textContent = code;
    pTemperature.textContent = `${data2.current.temperature_2m} °C`;
    pHumidity.textContent = `${data2.current.relative_humidity_2m}  %`;
    pWindSpeed.textContent = `${data2.current.wind_speed_10m} km/h`;

    creatCardActuelle();
    forecastContainer.replaceChildren();

    const forecastDays = data2.daily.time.map((date, index) => {
      return {
        date: date,
        tempMax: data2.daily.temperature_2m_max[index],
        tempMin: data2.daily.temperature_2m_min[index],
        code: data2.daily.weather_code[index],
      };
    });
    const cards2 = forecastDays.map((day) => {
      return creatForecastCard(day.date, day.tempMax, day.tempMin, day.code);
    });
    forecastContainer.append(...cards2);
  } catch (error) {
    if (!navigator.onLine) {
      errorMessage.textContent = "Vérifiez votre connexion Internet.";
    } else {
      errorMessage.textContent =
        error.message || "Une erreur inattendue est survenue.";
    }
    errorMessage.classList.remove("hidden");

    sectionCardsPrancippale.classList.add("hidden");
    sectionDetails.classList.add("hidden");
    forecastContainer.classList.add("hidden");
    retryBtn.classList.remove("hidden");
  } finally {
    loading.classList.add("hidden");
  }
});

retryBtn.addEventListener("click", () => {
  cityInput.value = lastCity;
  searchForm.requestSubmit();
});
