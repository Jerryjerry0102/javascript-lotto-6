import { Random } from '@woowacourse/mission-utils';
import Lotto from '../domain/lotto/Lotto.js';
import LottoValidator from '../validator/LottoValidator.js';
import WinningLotto from '../domain/lotto/WinningLotto.js';

class LottoGenerator {
  #numOfNumbers;
  #rangeOfNumbers;
  #lottoValidator;

  constructor({ numOfNumbers, rangeOfNumbers }) {
    this.#numOfNumbers = numOfNumbers;
    this.#rangeOfNumbers = rangeOfNumbers;
    this.#lottoValidator = new LottoValidator(numOfNumbers, rangeOfNumbers);
  }

  generateWinningLotto(winningNumbers, bonusNumber) {
    return new WinningLotto(winningNumbers, bonusNumber, this.#lottoValidator);
  }

  generateLottos(numOfLottos) {
    return Array.from({ length: numOfLottos }, () => this.#generateLotto());
  }

  #generateLotto() {
    return new Lotto(this.#generateNumbers(), this.#lottoValidator);
  }

  #generateNumbers() {
    return Random.pickUniqueNumbersInRange(
      ...Object.values(this.#rangeOfNumbers),
      this.#numOfNumbers,
    );
  }
}

export default LottoGenerator;
