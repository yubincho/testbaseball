const PlayerNumber = require('../model/player-number')
const ComputerNumber = require('../model/computer-number')
const { Console} = require('@woowacourse/mission-utils');
const MissionUtils = require("@woowacourse/mission-utils");


const getPlayerNumber = async function () {
    const baseballPlayer = new PlayerNumber()
    await baseballPlayer.play()
    const arr = baseballPlayer.getArr()
    Console.print("Player Array:", arr)
    return arr
};

const computerPickNumber = async function () {
    return new ComputerNumber()
}


const playGame = async () => {

    const computerNumber = (await computerPickNumber()).randomNumber()
    console.log('[computerNumber]', computerNumber)

    let strikeCount = 0
    let ballCount = 0


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
            Console.print("숫자 야구 게임을 시작합니다. ")
            await playGame()
        } else if (line.trim() === '2') {
            Console.print("종료되었습니다")
            Console.close()
        } else {
            // Console.print("올바른 값을 입력하세요.")
            // await restartGame()
            throw new Error("종료됩니다.")
        }
    })
}


module.exports = playGame

