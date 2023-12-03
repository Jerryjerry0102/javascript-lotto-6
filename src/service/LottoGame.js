import InputView from '../ui/InputView.js';
import LottoGenerator from './LottoGenerator.js';
import LottoResult from '../domain/result/LottoResult.js';
import OutputView from '../ui/OutputView.js';
import PurchaseAmount from '../domain/PurchaseAmount.js';
import WinningResult from '../domain/result/WinningResult.js';
import WinningAndBonusResult from '../domain/result/WinningAndBonusResult.js';

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
    this.#lottoResult.check(this.#lottos, this.#winningLotto);

    OutputView.printWinningResults(this.#lottoResult.getWinningResults());
    OutputView.printProfitRate(
      this.#lottoResult.calculateProfitRate(this.#purchaseAmount),
    );
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
        OutputView.printErrorMessage(error.message);
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
        OutputView.printErrorMessage(error.message);
      }
    }
  }

  #updateAndPrintLottos() {
    const numOfLottos = this.#purchaseAmount.getNumOfLottos();
    this.#lottos = this.#lottoGenerator.generateLottos(numOfLottos);
    OutputView.printNumOfLottos(numOfLottos);
    OutputView.printLottos(this.#lottos);
  }
}

export default LottoGame;
