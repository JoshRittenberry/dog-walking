import { getPets, getWalkers } from "./database.js"

const pets = getPets()

document.addEventListener(
    "click",
    (clickEvent) => {
        const clickTarget = clickEvent.target
        const walkerId = clickTarget.dataset.walkerforeignkey
        const petName = clickTarget.dataset.petname

        //Find the whole walker object based on the walkerId from above

        const allWalkers = getWalkers()
        for (const walker of allWalkers) {
            if (walker.id === parseInt(walkerId)) {
                window.alert(`${petName} is being wlaked by ${walker.name}`)
            }
        }
    }
)

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += 
        `<li data-walkerforeignkey="${pet.walkerId}"
        data-petname="${pet.name}"
        >${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

