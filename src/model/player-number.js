
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
            Console.readLine("숫자 3자리를 입력해 주세요: ", (line) => {
                if (line.length !== 3 || isNaN(line)) {
                    // console.log("숫자 3자리를 입력해야 합니다. 다시 입력해 주세요.")
                    // resolve(this.getInput())
                    throw new Error("종료됩니다.")
                } else {
                    Console.print("숫자를 입력해주세요 :")
                    resolve(line)
                }
            });
        });
    }

    getArr() {
        return this.arr
    }
}


module.exports = PlayerNumber;

