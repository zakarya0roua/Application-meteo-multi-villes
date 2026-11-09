const searchForm = document.querySelector("#search-form")
const cityInput = document.querySelector("#city-input")
const searchBtn = document.querySelector("#search-btn")
const errorMessage = document.querySelector("#error-message")
const loading = document.querySelector("#loading")

const url = "https://geocoding-api.open-meteo.com/v1/search?name=Berlin&count=10&language=en&format=json"


searchForm.addEventListener("submit", (event) => {
    event.preventDefault()
    if(cityInput.value.trim() === ""){
        errorMessage.classList.remove("hidden")
        loading.classList.add("hidden")
        return
    }
    errorMessage.classList.add("hidden")
    loading.classList.remove("hidden")

})