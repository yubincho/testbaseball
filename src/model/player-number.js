
const { Console } = require('@woowacourse/mission-utils');

class PlayerNumber {
    constructor() {
        this.arr = []
    }

    play() {
        return new Promise((resolve) => {
            this.getInput().then((validNumber) => {
                console.log("Valid input: ", validNumber)
                this.arr.push(...validNumber.split('').map(Number))
                resolve()
            })
        })
    }

    getInput() {
        return new Promise((resolve) => {
            // console.log("숫자 야구 게임을 시작합니다. ")
            Console.readLine("숫자 3자리를 입력해 주세요: ", (line) => {
                if (line.length !== 3 || isNaN(line)) {
                    console.log("숫자 3자리를 입력해야 합니다. 다시 입력해 주세요.")
                    resolve(this.getInput())
                } else {
                    console.log("숫자를 입력해주세요 :")
                    resolve(line)
                }
            });
        });
    }

    getArr() {
        console.log('#2',this.arr, this.arr.length)   // [ 8909, 2893 ] 2
        return this.arr
    }
}


module.exports = PlayerNumber;

