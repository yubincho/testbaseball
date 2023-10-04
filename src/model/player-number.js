const readline = require("readline");

class PlayerNumber {
    constructor() {
        this.arr = []
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
    }

    play() {
        return new Promise((resolve) => {
            this.getInput().then((validNumber) => {
                console.log("Valid input: ", validNumber);
                // this.arr.push(PlayerNumber(validNumber.split(' , ')));
                this.arr.push(...validNumber.split('').map(Number))
                // Do something with this.arr if needed
                this.rl.close();
                resolve(); // Resolve the promise after processing the input
            });
        });
    }

    getInput() {
        return new Promise((resolve) => {
            this.rl.question("숫자 야구 게임을 시작합니다. 숫자 3자리를 입력해 주세요: ", (line) => {
                if (line.length !== 3 || isNaN(line)) {
                    console.log("숫자 3자리를 입력해야 합니다. 다시 입력해 주세요.");
                    resolve(this.getInput()); // Re-prompt if input is not valid
                } else {
                    resolve(line);
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

