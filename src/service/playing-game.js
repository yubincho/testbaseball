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

async function playGame() {
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
        // await restartGame()
        return true; // Indicate that there are 3 strikes
    } else {
        console.log(`Result: strikes: ${strikeCount}, balls: ${ballCount}`);
        return false; // Indicate that there are not 3 strikes yet
    }
}

function askQuestion(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer.trim());
        });
    });
}

async function restartGame() {
    while (true) {
        const answer = await askQuestion("게임을 다시 시작하려면 1을, 종료하려면 2를 입력하세요: ");
        if (answer === "1") {
            return true;
        } else if (answer === "2") {
            console.log("프로그램이 종료되었습니다.");
            rl.close();
            process.exit();
        } else {
            console.log("잘못된 입력입니다. 1 또는 2를 입력하세요.");
        }
    }
}


async function playUntilThreeStrikes() {
    let shouldRestart = true;

    while (shouldRestart) {
        const hasThreeStrikes = await playGame()
        if (hasThreeStrikes) {
            shouldRestart = await restartGame()
        } else {
            shouldRestart = false
        }
    }
    rl.close();
}


playUntilThreeStrikes().then(() => {
    console.log("게임 종료");
});



module.exports = playGame

