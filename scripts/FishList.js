//gets info from database.js
import {getFish} from './database'

//will invoke the function getFish and put it into fishes
export const fishList = () => {
    const fishes = getFish()

//only need one article parent
const htmlString = '<article class="fishList"'

//an html loop for all the fishes that are going to pushed in
for (const fish of fishes) {
    
    // all get fish get looped through and pushed into the html
    htmlString += `<section class="fish card">
        <div><img class="fish_image image--card" src="${fish.image}" /></div>
        <div class="fish_name">${fish.name}</div>
        <div class="fish_species">${fish.species}</div>
        <div class="fish_length">${fish.length}</div>
        <div class="fish_location">${fish.location}</div>
        <div class="fish_diet">${fish.food}</div>
    </section>
    `
}
htmlString += `</article>`

return htmlString

}