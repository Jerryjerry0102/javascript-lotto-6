import { Console } from '@woowacourse/mission-utils';
import InputView from './InputView.js';
import LottoGenerator from './LottoGenerator.js';
import LottoResult from './LottoResult.js';
import OutputView from './OutputView.js';
import PurchaseAmount from './PurchaseAmount.js';
import WinningAndBonusResult from './WinningAndBonusResult.js';
import WinningResult from './WinningResult.js';

class LottoGame {
  #purchaseAmount;
  #lottos;
  #winningLotto;

  #lottoGenerator = new LottoGenerator({
    numOfNumbers: 6,
    rangeOfNumbers: {
      startInclusive: 1,
      endInclusive: 45,
    },
  });

  #lottoResult = new LottoResult(
    null,
    null,
    null,
    new WinningResult(3, 5, 5000),
    new WinningResult(4, 4, 50000),
    new WinningAndBonusResult(5, 2, 30000000, 3, 1500000),
    new WinningResult(6, 1, 2000000000),
  );

  async play() {
    await this.#updatePurchaseAmount();
    this.#updateAndPrintLottos();

    await this.#updateWinningLotto();
    // const winningNumbers = [4, 8, 15, 23, 42, 7]; // 가정
    // const bonusNumber = 7; // 가정
    this.#lottoResult.check(this.#lottos, this.#winningLotto);

    this.#printLottoResult();
  }

  async #updateWinningLotto() {
    while (true) {
      try {
        this.#winningLotto = this.#lottoGenerator.generateWinningLotto(
          await InputView.readWinningNumbers(),
          await InputView.readBonusNumber(),
        );
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async #updatePurchaseAmount() {
    while (true) {
      try {
        const input = await InputView.readPurchaseAmount();
        this.#purchaseAmount = new PurchaseAmount(1000, input);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  #updateAndPrintLottos() {
    const numOfLottos = this.#purchaseAmount.getNumOfLottos();
    this.#lottos = this.#lottoGenerator.generateLottos(numOfLottos);
    OutputView.printNumOfLottos(numOfLottos);
    OutputView.printLottos(this.#lottos);
  }

  #printLottoResult() {
    OutputView.printWinningResults(this.#lottoResult.getWinningResults());
    OutputView.printProfitRate(
      this.#lottoResult.calculateProfitRate(this.#purchaseAmount),
    );
  }
}

export default LottoGame;
