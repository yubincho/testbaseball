const MissionUtils = require('@woowacourse/mission-utils')

class ComputerPickNumber {

    constructor() {
        this.computerNumArr = []
    }

    randomNumber() {
        this.computerNumArr = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3)
        return this.computerNumArr
    }

}

module.exports = ComputerPickNumber