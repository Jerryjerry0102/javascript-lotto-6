import LottoGenerator from './LottoGenerator.js';
import LottoResult from './LottoResult.js';
import OutputView from './OutputView.js';
import WinningAndBonusResult from './WinningAndBonusResult.js';
import WinningResult from './WinningResult.js';

class LottoGame {
  #lottos;
  #lottoResult = new LottoResult(
    new WinningResult(6, 1, 2000000000),
    new WinningAndBonusResult(5, 2, 30000000, 3, 1500000),
    new WinningResult(4, 4, 50000),
    new WinningResult(3, 5, 5000),
  );

  play() {
    const numOfLottos = 10; // 가정
    const userLottos = this.#generateLottos(numOfLottos);
    OutputView.printNumOfLottos(numOfLottos);
    OutputView.printLottos(userLottos);

    const winningNumbers = [4, 8, 15, 23, 42, 7]; // 가정
    const bonusNumber = 7; // 가정
    this.#lottoResult.check(userLottos, winningNumbers, bonusNumber);

    OutputView.printWinningResults(this.#lottoResult.getWinningResults());
    OutputView.printProfitRate(
      this.#lottoResult.calculateProfitRate(numOfLottos * 1000),
    );
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
