import { getFish } from './database.js'
import {fishList} from './FishList.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

const parentHTMLElement = document.querySelector(".parent")

parentHTMLElement.innerHTML = fishList()