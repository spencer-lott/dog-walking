import { getPets, getWalkers } from "./database.js"
import { findWalker } from "./Assignments.js"

document.addEventListener(
    "click", 
    (clickEvent) => {
        
        const itemClicked = clickEvent.target

        
        if (itemClicked.id.startsWith("pet")) {

          
            const [, walkerId] = itemClicked.id.split("--")
            
            const walkers = getWalkers() 

            for (const petPrimaryKey of pets) {
              
            const walker = findWalker(petPrimaryKey, walkers)
            
                if (petPrimaryKey.id === parseInt(walkerId)) {
                    window.alert(`${petPrimaryKey.name} is being walked by ${walker.name}`)


                    }
               }
            }
        }
    

         
)

const pets = getPets()


export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const petPrimaryKey of pets) {
        petHTML += `<li id="pet--${petPrimaryKey.id}">${petPrimaryKey.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

