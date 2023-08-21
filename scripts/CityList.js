import { getWalkers } from "./database.js"

const walkers = getWalkers()

document.addEventListener(
    "click",
    (clickEvent) => {
        const whatWasClickedOn = clickEvent.target
        
        if (whatWasClickedOn.dataset.type === "city") {
            window.alert(`${whatWasClickedOn.dataset.name} is servicing this city`)
        }
    },
)

export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const walker of walkers) {
        citiesHTML += 
        `<li data-id="${walker.id}"
        data-name="${walker.name}"
        data-type="city"
        >${walker.city}</li>`
    }

    citiesHTML += "</ul>"

    return citiesHTML
}

