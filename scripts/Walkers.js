import { getWalkers, getCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()

document.addEventListener(
    "click",
    (clickEvent) => {
        const whatWasClickedOn = clickEvent.target
        
        if (whatWasClickedOn.dataset.type === "walker") {
            for (const city of cities) {
                if (whatWasClickedOn.dataset.city == city.id)
                window.alert(`This walker works in ${city.name}`)
            }
        }
    },
)

export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += 
        `<li data-id="${walker.id}" 
        data-city="${walker.city}"
        data-type="walker"
        >${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML
}

