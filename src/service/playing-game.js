const PlayerNumber = require('../model/player-number')
const ComputerNumber = require('../model/computer-number')
const { Console} = require('@woowacourse/mission-utils');



const getPlayerNumber = async function () {
    const baseballPlayer = new PlayerNumber()
    await baseballPlayer.play()
    const arr = baseballPlayer.getArr()
    console.log("Player Array:", arr)
    return arr
};

const computerPickNumber = new ComputerNumber()
// const computerNumber = computerPickNumber.randomNumber()
// console.log('[computerNumber]', computerNumber)

// let strikeCount = 0
// let ballCount = 0

const playGame = async () => {
    // const playerNumber = await getPlayerNumber()
    const computerNumber = computerPickNumber.randomNumber()
    console.log('[computerNumber]', computerNumber)

    let strikeCount = 0
    let ballCount = 0

    // let strikes = 0
    // let balls = 0

    while (strikeCount < 3) {
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

        if (strikeCount === 3) {
            Console.print("3스트라이크\n" +
                "3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        } else {
            Console.print(`Result: strikes: ${strikeCount}, balls: ${ballCount}`);
        }
    }

    await restartGame();

}


const restartGame = async () => {
    Console.readLine("게임을 다시 시작하거나 완전히 종료할 수 있습니다. 재시작을 원하면 1, 종료를 원하시면 2를 입력하세요. ", async (line) => {
        if (line.trim() === '1') {
            console.log("숫자 야구 게임을 시작합니다. ")
            await playGame()
        } else if (line.trim() === '2') {
            console.log("종료되었습니다")
            Console.close()
        } else {
            console.log("올바른 값을 입력하세요.")
            await restartGame()
        }
    })
}





playGame().then(r => {})



module.exports = playGame

