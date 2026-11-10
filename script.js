const searchForm = document.querySelector("#search-form")
const cityInput = document.querySelector("#city-input")
const searchBtn = document.querySelector("#search-btn")
const errorMessage = document.querySelector("#error-message")
const loading = document.querySelector("#loading")



searchForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityInput.value)}&count=10&language=en&format=json`

    if(cityInput.value.trim() === ""){
        errorMessage.classList.remove("hidden")
        loading.classList.add("hidden")
        return
    }
    errorMessage.classList.add("hidden")
    loading.classList.remove("hidden")
    
    fetch(url)
    .then((response) => {
        if(!response.ok) {
            throw new Error("Erreur lors de la recherche")
        }
        const data = response.json()
        return data;
    })
    .then((data) => {
        if(data.results.length === 0 || !data.results){
            throw new Error("La ville n'existe pas")
        }
    })
    .catch((error) => {
        errorMessage.classList.remove("hidden")
        errorMessage.textContent = error.message;
    })
    .finally(() => {
        loading.classList.add("hidden")
    })

})

