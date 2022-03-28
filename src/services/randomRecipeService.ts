import items from "./db.service";

function getRandomFood() {

    var randomNumber = Math.floor(Math.random() * items.length) + 1;
    return items[randomNumber];
}

export default getRandomFood;