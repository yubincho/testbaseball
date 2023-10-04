// import BaseballClass from "./model/baseball-class";
const BaseballClass = require('../model/player-number')



const baseballPlayer = new BaseballClass();
baseballPlayer.play().then(() => {
    const arr = baseballPlayer.getArr();
    console.log("Array:", arr);
});



