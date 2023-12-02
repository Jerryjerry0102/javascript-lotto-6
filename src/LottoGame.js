import LottoGenerator from './LottoGenerator.js';
import LottoResultChecker from './LottoResultChecker.js';
import OutputView from './OutputView.js';

class LottoGame {
  #lottos;

  play() {
    const numOfLottos = 10; // 가정
    const userLottos = this.#generateLottos(numOfLottos);
    OutputView.printNumOfLottos(numOfLottos);
    OutputView.printLottos(userLottos);

    const winningNumbers = [4, 8, 15, 23, 42, 7]; // 가정
    const bonusNumber = 7; // 가정
    const { winnings, totalPrizeMoney } = this.#checkLottoResult(
      userLottos,
      winningNumbers,
      bonusNumber,
    );
    console.log(winnings, totalPrizeMoney);
  }

  #checkLottoResult(userLottos, winningNumbers, bonusNumber) {
    return LottoResultChecker.check(userLottos, winningNumbers, bonusNumber);
  }

  #generateLottos(numOfLottos) {
    return new LottoGenerator({
      numOfNumbers: 6,
      rangeOfNumbers: {
        startInclusive: 1,
        endInclusive: 45,
      },
    }).generateLottos(numOfLottos);
  }
}

export default LottoGame;
