import { getWalkers, getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()

document.addEventListener(
    "click",
    (clickEvent) => {
        const whatWasClickedOn = clickEvent.target
        let walkerList = []
        const separator = ", "
        
        if (whatWasClickedOn.dataset.type === "city") {
            for (const walker of walkers) {
                if (walker.city == whatWasClickedOn.dataset.id) [
                    walkerList.push(walker.name)
                ]
            }
            window.alert(`${walkerList.join(separator)} is servicing this city`)
        }
    },
)

export const CityList = () => {
    let cityObject = null
    let cityArray = []

    let citiesHTML = "<ul>"
    for (const walker of walkers) {
        for (const city of cities) {
            if (city.id == walker.city && !cityArray.includes(city)) {
                cityArray.push(city)
                for (const cityAgain of cityArray) {
                    if (cityAgain.id == walker.id) {
                        cityObject = cityAgain
                    }
                }
                citiesHTML += 
                `<li data-id="${cityObject.id}"
                data-type="city"
                >${cityObject.name}</li>`
            }
        }
    }
    citiesHTML += "</ul>"
    return citiesHTML
}

