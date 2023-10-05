const PlayerNumber = require('../model/player-number')
const ComputerNumber = require('../model/computer-number')
const readline = require("readline");


const rl = readline.createInterface({
    // 모듈을 이용해 입출력을 위한 인터페이스 객체 생성
    input: process.stdin,
    output: process.stdout,
});


const getPlayerNumber = async function () {
    const baseballPlayer = new PlayerNumber();
    await baseballPlayer.play();
    const arr = baseballPlayer.getArr();
    console.log("Player Array:", arr);
    return arr;
};

const computerPickNumber = new ComputerNumber();
const computerNumber = computerPickNumber.randomNumber();
console.log('[computerNumber]', computerNumber)

let strikeCount = 0
let ballCount = 0

const playGame = async () => {
    const playerNumber = await getPlayerNumber();

    let strikes = 0;
    let balls = 0;

    playerNumber.forEach((value, index) => {
        if (value === computerNumber[index]) {
            strikes++;
        } else if (computerNumber.includes(value)) {
            balls++;
        }
    });

    strikeCount += strikes;
    ballCount += balls;

    if (strikes === 3) {
        console.log("3스트라이크\n" +
            "3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        await restartGame()
        // return true
    } else {
        console.log(`Result: strikes: ${strikeCount}, balls: ${ballCount}`);
        await playGame()
        // return false
    }

}

const questionAsync = (question) => {
    return new Promise((resolve) => {
        rl.question(question, resolve);
    });
};

const restartGame = async () => {
    console.log("끝");
    const line = await questionAsync("게임을 다시 시작하거나 완전히 종료할 수 있습니다. 재시작을 원하면 1, 종료를 원하시면 2를 입력하세요. ");

    if (line.trim() === '1') {
        console.log('111');
        console.log("숫자 야구 게임을 시작합니다. ");
        await playGame();
    } else if (line.trim() === '2') {
        console.log("종료되었습니다")
        rl.close();
    } else {
        console.log("올바른 값을 입력하세요.");
        await restartGame();
    }
};





playGame().then(r => {})



module.exports = playGame

