// const BaseballClass = require('../model/baseball-class')
const MissionUtils = require('@woowacourse/mission-utils')


let computerArr = []
function computerPickNumber () {

   let randomNum = MissionUtils.Random.pickUniqueNumbersInRange(1, 10, 3)
   computerArr = randomNum
   return computerArr
}
computerArr = computerPickNumber()
console.log(computerArr)

module.exports = computerPickNumber








